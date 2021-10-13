import React from 'react';
import User from './User';

class UsersList extends React.Component {
  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    const usersList = this.props.users.slice();
    if (this.state.sorting) {
      usersList.sort((a, b) => (this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age));
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
