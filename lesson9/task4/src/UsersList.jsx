import React from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends React.Component {
  state = {
    filterText: '',
  };

  onChange = event => {
    this.setState({
      filterText: event.target.value,
    });
  };

  render() {
    const { filterText } = this.state;
    const { users } = this.props;

    const filteredUsers = users.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase()),
    );

    const filteredUsersCount = filteredUsers.length;

    return (
      <div>
        <Filter filterText={filterText} count={filteredUsersCount} onChange={this.onChange} />
        <ul className="users">
          {filteredUsers.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
