import React from 'react';
import './greeting.scss';
import moment from 'moment';

const getUserOld = birthDate => {
  const formattedBirthday = moment(birthDate).format('DD MMM YYYY');
  const old = moment().diff(formattedBirthday, 'years');
  return old;
};

const Greeting = props => (
  <div className="greeting">
    My name is {props.firstName} {props.lastName}. I&apos;m {getUserOld(props.birthDate)} years old
  </div>
);

export default Greeting;
