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
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class DialogApp extends React.Component {
  constructor(props) {
    super(props);
  }

  //Concatinating code Step 1: Add Dialouge Handlers
  //Set DialogBox,checkbox intial state
  state = {
    open: false,
    checkMon: null,
    checkTues: null,
    checkWeds: null,
    checkThurs: null,
    checkFri: null,
    startt: null,
    endt: null,
    entries: [],
  };

  //DialogBox Handelers
  handleOpen = () => {
    this.setState({ open: true });
  };

  //Handler for closing the box. Should reset all states to null, but should we use a batch job(unstable)?
  handleClose = () => {
    this.setState({ open: false });
    this.setState({ checkMon: null });
    this.setState({ checkTues: null });
    this.setState({ checkWeds: null });
    this.setState({ checkThurs: null });
    this.setState({ checkFri: null });
    this.setState({ startt: null });
    this.setState({ endt: null });
  };

  handlePrint = () => {
    this.setState({ open: false });
  };

  //Checkbox Handler
  handleCheck = name => event => {
    if (event.target.checked == false) {
      this.setState({ [name]: (event.target.checked = null) });
    } else {
      switch (name) {
        case 'checkMon':
          this.setState({ [name]: 'M' });
        case 'checkTues':
          this.setState({ [name]: 'T' });
        case 'checkWeds':
          this.setState({ [name]: 'W' });
        case 'checkThurs':
          this.setState({ [name]: 'R' });
        case 'checkFri':
          this.setState({ [name]: 'F' });
      }
    }
  };

  //TimePicker Handler. Pretty much same as the old checkbox, just pulling out value
  handleTime = name => event => {
    this.setState({ [name]: event.target.value });
  };

  //Method to push/store a set of states to entires[]
  onAddClick = () => {
    let entries = this.state.entries;
    if (
      (this.state.checkMon ||
        this.state.checkTues ||
        this.state.checkWeds ||
        this.state.checkThurs ||
        this.state.checkFri) &&
      this.state.startt &&
      this.state.endt
    ) {
      entries.push(
        this.state.checkMon,
        this.state.checkTues,
        this.state.checkWeds,
        this.state.checkThurs,
        this.state.checkFri,
        this.state.startt,
        this.state.endt,
      );
      this.setState({
        entries,
      });
    } else {
      alert('Please select a Day and Time');
    }
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
            <div>
              <Paper>
                <Table fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter}>
                  <TableHead>
                    <TableRow>
                      <TableCell tooltip="Day">Day</TableCell>
                      <TableCell tooltip="Time">Time</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}
                  >
                    {this.state.entries.map(row => (
                      <TableRow>
                        <TableCell />
                        <TableCell />
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </div>
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
            <Button onClick={this.onAddClick} color="secondary">
              Add
            </Button>
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
