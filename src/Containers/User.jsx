import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ARTAN, AZALAN } from '../Actions';


class User extends Component {
  render() {
    return (
      <div className="User">
        <button onClick={ () => this.props.art(1) }>ARTTIR</button>
        <button onClick={ () => this.props.az(1) }>AZALT</button>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    art: (number) => {
      dispatch(ARTAN(number))
    },
    az: (number) => {
      dispatch(AZALAN(number))
    },
    
  };
};

export default connect(null,mapDispatchToProps)(User);
