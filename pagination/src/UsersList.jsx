/* eslint-disable class-methods-use-this */
import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    pageNumber: 1,
    usersPerPage: 3,
  };

  handlePrev = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
  };

  handleNext = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };

  render() {
    const { pageNumber, usersPerPage } = this.state;

    const startIndex = (pageNumber - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToRender = this.props.users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          pageNumber={this.state.pageNumber}
          handlePrev={this.handlePrev}
          handleNext={this.handleNext}
          usersCount={this.props.users.length}
          usersPerPage={this.state.usersPerPage}
        />

        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
