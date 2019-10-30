import React from 'react';
import { connect } from 'react-redux';
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  let groupId= ownProps.id;
  return {
    name: ownProps.name,
    id: groupId,
    tasks: state.tasks.filter(task=> task.group === groupId)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      console.log("Creating new task ... ");
      dispatch(requestTaskCreation(id));
    }
  }
};


export const TaskList = ({name, tasks, id, createNewTask}) => (
  <div>
    <h3>
      {name}
    </h3>
    <div>
      {tasks.map(task => (
        <div key={ task.id }>
          <Link to={`/task/${task.id}`}>
            { task.name }
          </Link>
        </div>
      ))}
    </div>
    <button onClick={ () =>
      createNewTask(id) }
    >
      Add New
    </button>
  </div>
);



export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);