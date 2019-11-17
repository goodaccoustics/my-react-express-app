import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (state, ownProps) => {

};

export const Home = () => (
  <div>
    Test
  </div>
);

export const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);