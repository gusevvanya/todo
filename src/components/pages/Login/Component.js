import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './styles.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
    isValidateSuccess: true,
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    if (this.checkUser(this.state.username, this.state.password)) {
      this.props.history.push('/');
    } else {
      this.setState({
        isValidateSuccess: false,
      });
    }
  };

  setUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  setPassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  checkUser = (name, password) => {
    if (name === 'admin' && password === '123') {
      localStorage.setItem('login', 'true');
      return true;
    }
    return false;
  };

  render() {
    return (
      <div className={styles.page}>
        <form
          className={styles.form}
          onSubmit={this.onSubmitForm}
        >
          <h1>Please login</h1>
          <TextField
            value={this.state.username}
            floatingLabelText="Username"
            floatingLabelFixed
            onChange={this.setUsername}
            fullWidth
          />
          <TextField
            value={this.state.password}
            floatingLabelText="Password"
            floatingLabelFixed
            onChange={this.setPassword}
            type="password"
            fullWidth
          />
          <RaisedButton
            type="submit"
            label="Submit"
            style={{ marginTop: '20px' }}
          />
          {
            !this.state.isValidateSuccess &&
            <p className={styles.error}>Wrong login or password!</p>
          }
        </form>
      </div>
    );
  }
}

export default Login;
