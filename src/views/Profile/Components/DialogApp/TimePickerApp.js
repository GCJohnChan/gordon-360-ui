import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

export default class TimePickerApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeTimePicker1 = this.handleChangeTimePicker1.bind(this);
    this.handleChangeTimePicker2 = this.handleChangeTimePicker2.bind(this);
    this.state = {
      value: '00:00',
    };
  }

  handleChangeTimePicker1(event, date) {
    this.props.onChange(event.target.value);
    this.setState({
      value: event.target.value,
    });
  }

  handleChangeTimePicker2(event, date) {
    this.props.onChange(event.target.value);
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <form noValidate>
        <TextField
          id="time1"
          label="Time 1"
          type="time"
          onChange={this.handleChangeTimePicker1}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="time2"
          label="Time 2"
          type="time"
          onChange={this.handleChangeTimePicker2}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </form>
    );
  }
}
