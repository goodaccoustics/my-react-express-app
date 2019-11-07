import { take, put, select } from 'redux-saga/effects';
import * as mutations from './mutations';
import uuid from 'uuid';
import axios from 'axios'

const url = 'http://localhost:8888';

export function* taskCreationSaga() {
  while(true) {
    const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerId = 'U1';
    const taskId = uuid();
    yield put(mutations.createTask(taskId, groupId, ownerId));

    const {res} = axios.post(url + '/task/new', {
      task: {
        id: taskId,
        name: "New Task",
        owner: ownerId,
        group: groupId,
        isComplete: false
      }
    });

    console.log("Add New Task Response: ", res);
  }
}

export function* taskModificationSaga() {
  while (true) {
    const task = yield take([
      mutations.SET_TASK_GROUP,
      mutations.SET_TASK_NAME,
      mutations.SET_TASK_COMPLETE
    ]);
    const {res} = axios.post(url + '/task/update', {
      task: {
        id: task.taskId,
        group: task.groupId,
        name: task.name,
        isComplete: task.isComplete
      }
    });
  }
}
