import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './styles.css';

class AddGoal extends Component {
  state = {
    title: '',
    titleErrorText: '',
    subtitle: '',
    subtitleErrorText: '',
    imgSrc: '',
  };
  setValue = value => (event) => {
    this.setState({ 
      [value]: event.target.value,
      [`${value}ErrorText`]: '',
    });
  };
  addNewGoal = (e) => {
    e.preventDefault();

    if (!this.isFormValid()) return;

    this.props.createNewGoal(this.state.title, this.state.subtitle, this.state.imgSrc);
  };
  isFormValid = () => {
    let isValid = true;

    if (this.state.title.length === 0) {
      this.setState({ titleErrorText: 'Please, select the title' });
      isValid = false;
    }
    if (this.state.subtitle.length === 0) {
      this.setState({ subtitleErrorText: 'Please, select the subtitle' });
      isValid = false;
    }

    return isValid;
  };
  render() {
    return (
      <div>
        <form 
          className={styles.form}
          onSubmit={this.addNewGoal}
        >
          <TextField
            value={this.state.title}
            errorText={this.state.titleErrorText}
            floatingLabelText="Title"
            floatingLabelFixed
            onChange={this.setValue('title')}
            fullWidth
            multiLine
          />
          <TextField
            value={this.state.subtitle}
            errorText={this.state.subtitleErrorText}
            floatingLabelText="Description"
            floatingLabelFixed
            onChange={this.setValue('subtitle')}
            fullWidth
            multiLine
          />
          <TextField
            value={this.state.imgSrc}
            floatingLabelText="Image source"
            floatingLabelFixed
            onChange={this.setValue('imgSrc')}
            fullWidth
          />
          <RaisedButton
            type="submit"
            label="Submit"
            style={{ marginTop: '20px' }}
          />
        </form>
      </div>
    );
  }
}

AddGoal.propTypes = {
  createNewGoal: PropTypes.func.isRequired,
};

export default AddGoal;
