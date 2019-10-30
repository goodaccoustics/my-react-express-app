import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from "./TaskList";


function mapStateToProps(state) {
  return {
    groups: state.groups
  }
}

export const Dashboard = ({groups}) => (
  <div>
    <h2>Dashboard</h2>
    {groups.map(group =>(
      <ConnectedTaskList key={group.id} id={group.id} name={group.name} />
      )
    )}
  </div>
);



export const ConnectedDashBoard = connect(mapStateToProps)(Dashboard);