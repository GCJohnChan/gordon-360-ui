import React from 'react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

class DialogApp extends React.Component {
  constructor(props) {
    super(props);
  }

  //Concatinating code Step 1: Add Dialouge Handlers
  //Set DialogBox,checkbox intial state
  state = {
    open: false,
    checkMon: false,
    checkTues: false,
    checkWeds: false,
    checkThurs: false,
    checkFri: false,
    startt: '00:00',
    endt: '00:00',
  };

  //DialogBox Handelers
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handlePrint = () => {
    this.setState({ open: false });
  };

  //Checkbox Handler
  handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  //TimePicker Handler. Pretty much same as checkbox, just pulling out value
  handleTime = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    //Allows dynamic components (namely checkbox) to access states?
    const { classes } = this.props;
    return (
      <div>
        <Button variant="raised" onClick={this.handleOpen}>
          DialogActions
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          arialabelledby="form-dialog-title"
        >
          <DialogContent>
            <tr>
              <td>
                <FormControl component="fieldset">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkMon}
                          onChange={this.handleCheck('checkMon')}
                          value="checkMon"
                        />
                      }
                      label="Monday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkTues}
                          onChange={this.handleCheck('checkTues')}
                          value="checkTues"
                        />
                      }
                      label="Tuesday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkWeds}
                          onChange={this.handleCheck('checkWeds')}
                          value="checkWeds"
                        />
                      }
                      label="Wednesday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkThurs}
                          onChange={this.handleCheck('checkThurs')}
                          value="checkThurs"
                        />
                      }
                      label="Thursday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkFri}
                          onChange={this.handleCheck('checkFri')}
                          value="checkFri"
                        />
                      }
                      label="Friday"
                    />
                  </FormGroup>
                </FormControl>
              </td>
              <td>
                <form noValidate>
                  <TextField
                    id="startt"
                    label="Start Time"
                    type="time"
                    onChange={this.handleTime('startt')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                  <TextField
                    id="endt"
                    label="End Time"
                    type="time"
                    onChange={this.handleTime('endt')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                </form>
              </td>
            </tr>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DialogApp;
