import React from 'react';
import Avatar from './Avatar';
import './userInfo.scss';

const UserInfo = props => (
  <div className="user-info">
    <Avatar name={props.user.name} avatarUrl={props.user.avatarUrl} />
    <div className="user-info__name">{props.user.name}</div>
  </div>
);

export default UserInfo;
