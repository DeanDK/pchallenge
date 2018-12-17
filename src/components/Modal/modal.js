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
      initialRender: false
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.contact.contactInfo) {
      const info = { ...nextProps.contact.contactInfo.data };
      this.setState({
        modal: nextProps.isClicked,
        initialRender: true,
        info,
        email: info.email[0]
      });
    }
  };

  render() {
    const { info, email, initialRender } = this.state;
    if (this.state.info && initialRender) {
      return (
        <div>
          <Modal isOpen={this.state.modal} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Wine Information</ModalHeader>
            <ModalBody>
              <div className="top">
                <div className="top__image">
                  <img src="/images/logo.png" alt="logo" height="50px" />
                </div>
                <div className="top__title">{info.name}</div>
                <div className="top__information">
                  <label htmlFor="Country" className="top__information-country">
                    Email:
                  </label>
                  {email.value}
                  <br />
                  <label htmlFor="Year" className="top__information-country">
                    Organization:
                  </label>
                  {info.org_name}
                  <br />
                  <label htmlFor="Country" className="top__information-country">
                    CC Email:
                  </label>
                  {info.cc_email} <br />
                  <label htmlFor="Country" className="top__information-country">
                    Still Active:
                  </label>
                  {info.company_id} <br />
                  <label htmlFor="Country" className="top__information-country">
                    Activities Count:
                  </label>
                  {info.activities_count} <br />
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
