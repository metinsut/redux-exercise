import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ARTAN, AZALAN } from '../Actions';


class User extends Component {
  render(dispatch) {
    return (
      <div className="User">
        <button onClick={ () => this.props.dispatch(ARTAN(1)) }>ARTTIR</button>
        <button onClick={ () => this.props.dispatch(AZALAN(1)) }>AZALT</button>
      </div>
    );
  }
}


export default connect()(User);
