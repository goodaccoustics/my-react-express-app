import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return state;
}

const LoginComponent = () => {
  return <div>
    Login here!

  </div>
};

export const ConnectedLogin = connect(mapStateToProps)(LoginComponent);