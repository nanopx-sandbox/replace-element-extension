import React, { Component, createElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import actions from

// function mapStateToProps(state) {
//   return {};
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({}, dispatch);
// }

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>hello</p>
    );
  }
}

export default App; // connect(App, mapStateToProps, mapDispatchToProps);
