import React from 'react';
import { connect } from 'react-redux';

class Numbers extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <h1>{this.props.user}</h1>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user.number
  };
};


export default connect(mapStateToProps)(Numbers);
