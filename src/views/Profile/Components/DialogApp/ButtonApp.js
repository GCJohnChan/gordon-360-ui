import React from 'react';
import Button from 'material-ui/Button';

class ButtonApp extends React.Component {
  style = {
    marginTop: 12,
    width: '6%',
  };

  handleClick = () => {
    this.props.onAddClick();
  };

  handleDelete = () => {
    this.props.onDeleteClick();
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleDelete} variant="raised" style={this.style}>
          Delete
        </Button>
        <Button onClick={this.handleClick} variant="raised" style={this.style}>
          Add
        </Button>
        <br />
        <br />
      </div>
    );
  }
}

export default ButtonApp;
