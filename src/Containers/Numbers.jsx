import React from 'react';
import { connect } from 'react-redux';

class Numbers extends React.Component {
  render() {
    return (
      <h1>{this.props.user}</h1>
    )
  }
}


const showNumber = (state) => {
  return {
    user: state.user.number
  };
}

export default connect(showNumber) (Numbers);
