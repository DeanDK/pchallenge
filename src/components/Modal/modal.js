import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.isClicked,
      wine: {
        title: "",
        country: "",
        year: ""
      }
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.wines.wine) {
      const oneWine = { ...nextProps.wines.wine };
      this.setState({ wine: oneWine, modal: nextProps.isClicked });
    }
  };

  render() {
    if (this.state.wine) {
      return (
        <div>
          <Modal isOpen={this.state.modal} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Wine Information</ModalHeader>
            <ModalBody>
              <div className="top">
                <div className="top__image">
                  <img src="/images/wine.png" alt="logo" height="50px" />
                </div>
                <div className="top__title">{this.state.wine.title}</div>
                <div className="top__information">
                  <label htmlFor="Country" className="top__information-country">
                    Country:
                  </label>
                  {this.state.wine.country} <br />
                  <label htmlFor="Year" className="top__information-country">
                    Year:
                  </label>
                  {this.state.wine.year}
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
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    wines: state.wineReducer
  };
}

export default connect(mapStateToProps)(ModalExample);
