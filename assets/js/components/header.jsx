import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

export default function Header(props) {
  let {root, session} = props;
  let session_info;
  if(session == null) {
    session_info = <div className="form-inline my-5">
      <input type="email" placeholder="email" onChange={(ev) => root.update_login_form({email: ev.target.value})} />
      <input type="password" placeholder="password" onChange={(ev) => root.update_login_form({password: ev.target.value})} />
      <button className="btn btn-info" onClick={() => root.login()}>Login</button>
    </div>;
  }
  else {
    session_info = <div className="my-3">
      <p>Logged in as {session.user_id}</p>
      <button className="btn btn-info" onClick={() => root.logout()}>Logout</button>
    </div>
  }
  return (<div>
    <nav className="navbar navbar-expand-sm navbar-light bg-salmon">
    <div className="container">
      <div className="col-3">
        <a className="navbar-brand">Task Tracker - Single Page Application</a>
      </div>
	  <br />
	  <div class="clearfix"></div>
      <div className="col-3">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} class="nav-link">Tasks</Link>
          </li>
          <li className="nav-item">
            <Link to={"/users"} class="nav-link">Users</Link>
          </li>
        </ul>
      </div>
      <div className="col-4">
        {session_info}
      </div>
    </div>
  </nav>
  <Link to={"/tasks/new"}><button className="btn btnNew d-flex justify-content center">Add New Task</button></Link>
	  <br />
  <Link to={"/users/new"}><button className="btn btnView d-flex justify-content center">Add New User</button></Link>
  </div>
)
}
