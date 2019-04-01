import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default function TaskList(props) {
  // TODO:
  //let {tasks, dispatch} = props;
  let {root, tasks} = props;
  tasks = _.map(tasks, (t) => <Task key={t.id} root={root} task={t} />);
  return <div class="container">
    <div className="row">
      <h2></h2>
    </div>
    <div className="row">
      <h2>Tasks List</h2>
    </div>
    <div className="row">
      {tasks}
    </div>
  </div>;
}

function Task(props) {
  let {root, task} = props;
  let completed = "No"
  let button = <button className="btn btnView" onClick={() => root.mark_complete(task)}>Mark Complete</button>;
  let timeTitle = "Enter New Time:";
  let line = <br />;
  let trackTime = <input type="number" step="15" onChange={(ev) => root.track_time(task, ev.target.value)}/>;
  if (task.complete) {
    completed = "Yes"
    button = ""
    timeTitle = ""
    trackTime = ""
    line = ""
  }
  return <div className="card w-100">
    <div className="card-body">
      <h2 className="card-title">Task: {task.name}</h2>
      <p className="card-text">
      Description: {task.desc}
	&emsp;
      User: {task.user_id}
	&emsp;
      Time: {task.time}
	&emsp;
      Completed: {completed}
	&emsp;
      {button}
	&emsp;
      {timeTitle}
      {trackTime}
      </p>
    </div>
  </div>;
}
