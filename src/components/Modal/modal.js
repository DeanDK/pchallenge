import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      info: {},
      email: "",
      phone: "",
      initialRender: false
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.contact.contactInfo) {
      const info = { ...nextProps.contact.contactInfo.data };
      this.setState({
        modal: nextProps.isClicked,
        initialRender: true,
        email: info.email[0],
        phone: info.phone[0],
        info
      });
    }
  };

  render() {
    const { info, email, initialRender, phone } = this.state;
    if (this.state.info && initialRender) {
      return (
        <div>
          <Modal isOpen={this.state.modal} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Person Information</ModalHeader>
            <ModalBody>
              <div className="top">
                <div className="top__image">
                  <img src="/images/logo.png" alt="logo" height="50px" />
                </div>
                <div className="top__title">{info.name}</div>
                <div className="top__phone">{phone.value}</div>
                <div className="top__information">
                  <div className="top__information-labels">
                    <p htmlFor="Email">Email</p>
                    <p htmlFor="CC_Email">Organization</p>
                    <p htmlFor="Visible to">Visible</p>
                    <p htmlFor="Activities Count">Count</p>
                  </div>
                  <div className="top__information-values">
                    <p>{email.value}</p>
                    <p>{info.org_name}</p>
                    <p>{info.visible_to}</p>
                    <p>{info.company_id}</p>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="secondary"
                onClick={e => this.setState({ modal: false })}
              >
                Back
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactReducer
  };
}

export default connect(mapStateToProps)(ModalExample);

Modal.propTypes = {
  contact: PropTypes.object
};
