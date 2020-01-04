import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {increment} from '../actions/index';
import '../home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DynamicComponent: ''
    };
  }
  handleOnClick = async () => {
      const Contact = await import('./Contact');

      this.setState({
          DynamicComponent: Contact.default
      });
  };

  render() {

      const { DynamicComponent } = this.state;
      return (
          <header className="header">
              <button type="button" 
                  onClick={this.handleOnClick}>
                  Load Github!
              </button>

              <nav>
                  {DynamicComponent && <DynamicComponent/>}
              </nav>
      <div><button type="button" onClick={()=> this.props.increment()}>Increase</button></div>
      <div>Counter is: {this.props.counter}</div>
          </header>
      );
  }
}
function mapStateToProps(state) {
    return {
      counter: state.counter
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({increment}, dispatch);
  }

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));