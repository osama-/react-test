import React, {Component} from "react";
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact {this.props.counter}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default withRouter(connect(mapStateToProps)(Contact));