import React from 'react';
import propTypes from 'prop-types';

class CreateTaskInput extends React.Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button className="btn create-task__btn" onClick={this.handleCreate}>
          Create
        </button>
      </div>
    );
  }
}

CreateTaskInput.propTypes = {
  onCreate: propTypes.func.isRequired,
};

export default CreateTaskInput;
