import React, { Component } from "react";
import { connect } from "react-redux";

import Info from "./../components/Info/info";
import WineItems from "./../widgets/wine_items.js";
import { getAllWines } from "./../actions";
import { bindActionCreators } from "redux";

class HomeContainer extends Component {
  state = {
    wines: []
  };

  componentWillMount() {
    this.props.getAllWines();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.wines.wineList)
      this.setState({ wines: nextProps.wines.wineList });
  }

  renderItems = wines =>
    wines
      ? wines.map((item, index) => {
          return <WineItems {...item} key={index} index={index} />;
        })
      : null;

  render() {
    const { wines } = this.state;
    return (
      <div>
        <Info />
        {this.renderItems(wines)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    wines: state.wineReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllWines }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
