import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const usersArray = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-52',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-6',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-5',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-9',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-99',
    age: 17,
    name: 'tom',
  },
  {
    id: 'id-19',
    age: 17,
    name: 'Martin',
  },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={usersArray} />, rootElement);
