import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import User from './User';

const Users = props => {
  const path = props.match.url;

  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${path}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${path}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/:userId`} component={User} />
        <Route exact path={path}>
          <span>Select a user please</span>
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
