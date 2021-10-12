import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

// input: props (obj)
// output: jsx

// algo
// 1. show login by default ++
// 2. after login click - hide Login & show Spinner for 2 seconds ++
// 3. after Logout click - hide Logout & show Lodin ++
class Auth extends Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  //input: obj
  //output: undefined

  loginHandler = () => {
    this.setState({ isProcessing: true });

    setTimeout(() => {
      this.setState({ isProcessing: false, isLoggedIn: true });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn, isProcessing } = this.state;
    // const isLoggedIn = this.state.isLoggedIn;

    if (isProcessing) {
      return <Spinner />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }
    return <Login onLogin={this.loginHandler} />;

    // return isLoggedIn ? (
    //   <Logout onLogout={this.logoutHandler} />
    // ) : (
    //   <Login onLogin={this.loginHandler} />
    // );
  }
}

export default Auth;

// 0. make a layout +++++
// 1. split on components ++++
// 2. static version in react +
// 3. declare state and props +
// 4. write logic
