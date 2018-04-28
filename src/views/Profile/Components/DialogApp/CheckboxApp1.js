import React, { Component } from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    width: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class CheckboxApp1 extends Component {
  constructor(props) {
    super(props);

    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      checked: false,
    };
  }

  handleCheck(ev, checked) {
    if (checked) {
      this.props.onChange(ev.target.value);
    }
  }

  render() {
    return (
      <div style={styles.block}>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id="checkbox_mon"
                  //type="checkbox"
                  value="monday"
                  //checked={this.state.checked}
                  onChange={this.handleCheck}
                  //style={styles.checkbox}
                />
              }
              label="MONDAY"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="checkbox_tue"
                  //type="checkbox"
                  value="tuesday"
                  //checked={this.state.checked}
                  onChange={this.handleCheck}
                  //style={styles.checkbox}
                />
              }
              label="TUESDAY"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="checkbox_wed"
                  //type="checkbox"
                  value="wednesday"
                  //checked={this.state.checked}
                  onChange={this.handleCheck}
                  //style={styles.checkbox}
                />
              }
              label="WEDNESDAY"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="checkbox_thu"
                  //type="checkbox"
                  value="thursday"
                  //checked={this.state.checked}
                  onChange={this.handleCheck}
                  //style={styles.checkbox}
                />
              }
              label="THURSDAY"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="checkbox_fri"
                  //type="checkbox"
                  value="friday"
                  //checked={this.state.checked}
                  onChange={this.handleCheck}
                  //style={styles.checkbox}
                />
              }
              label="FRIDAY"
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

export default CheckboxApp1;
