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
//import http from '../../../../services/http';

class DialogApp extends React.Component {
  constructor(props) {
    super(props);

    this.deleteRow = this.deleteRow.bind(this);
    this.renderInputTable = this.renderInputTable.bind(this);
    this.getCheckedValue = this.getCheckedValue.bind(this);
    this.handleCheck2 = this.handleCheck2.bind(this);
    this.handleonsubmit = this.handleonsubmit.bind(this);
    this.builderOfficeHours = this.builderOfficeHours.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
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
    startTime: '',
    endTime: '',
    MondayStartTime: '',
    MondayEndTime: '',
    TuesdayStartTime: '',
    TuesdayEndTime: '',
    WedsdayStartTime: '',
    WedsdayyEndTime: '',
    ThurdaySatrtTime: '',
    ThursdayEndTime: '',
    FridayStartTime: '',
    FridayEndTime: '',
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
  handleCheck2(e, boo) {
    let el = e.target;
    let name = el.name;

    let tmp = this.state;

    if (name === 'checkMon') {
      if (boo) {
        tmp.checkMon = 'M';
      } else {
        tmp.checkMon = null;
      }
    }
    if (name === 'checkTues') {
      if (boo) {
        tmp.checkTues = 'T';
      } else {
        tmp.checkTues = null;
      }
    }

    if (name == 'checkWeds') {
      if (boo) {
        tmp.checkWeds = 'W';
      } else {
        tmp.checkWeds = null;
      }
    }
    if (name == 'checkThurs') {
      if (boo) {
        tmp.checkThurs = 'R';
      } else {
        tmp.checkThurs = null;
      }
    }
    if (name == 'checkFri') {
      if (boo) {
        tmp.checkFri = 'F';
      } else {
        tmp.checkFri = null;
      }
    }
    this.setState(tmp);
  }
  handleTime2 = e => {
    let val = e.target.value;
    let name = e.target.name;
    let tmp = this.state;
    tmp[name] = val;
    this.setState(tmp);
  };
  onAddClick = () => {
    let entries = this.state.entries;
    let days = this.state.days;
    if (
      (this.state.checkMon ||
        this.state.checkTues ||
        this.state.checkWeds ||
        this.state.checkThurs ||
        this.state.checkFri) &&
      this.state.startTime &&
      this.state.endTime
    ) {
      let val1 = '';
      if (this.state.checkMon !== null) {
        val1 = val1 + this.state.checkMon;
      }
      if (this.state.checkTues !== null) {
        val1 = val1 + this.state.checkTues;
      }
      if (this.state.checkWeds !== null) {
        val1 = val1 + this.state.checkWeds;
      }
      if (this.state.checkThurs !== null) {
        val1 = val1 + this.state.checkThurs;
      }
      if (this.state.checkFri !== null) {
        val1 = val1 + this.state.checkFri;
      }

      let obj = {
        val1: val1,
        start: this.state.startTime,
        end: this.state.endTime,
      };
      entries.push(obj);
      this.setState({
        entries,
      });

      let state = this.state;
      state.checkMon = null;
      state.checkTues = null;
      state.checkWeds = null;
      state.checkThurs = null;
      state.checkFri = null;
      this.setState(state);
      //  setDays={this.setDays} setTime={this.setTime}

      this.props.setDays(entries);
      this.props.setTime('startTime', this.state.startTime);
      this.props.setTime('endTime', this.state.endTime);
      let tmp = this.state;
      tmp.days = entries;
      this.setState(tmp);
    } else {
      alert('Please select a Day and Time');
    }
  };
  //Deletes the rows days
  deleteRow(dayIn) {
    let ls = [];
    let rows = this.state.entries;
    let tmp = this.state;

    for (let i in rows) {
      let day = rows[i];
      if (dayIn !== day.val1) {
        ls.push(day);
      }
    }

    tmp.entries = ls;
    this.setState(tmp);

    let ls2 = [];
    for (let i in this.state.days) {
      let day = this.state.days[i];
      if (dayIn !== day.val1) {
        ls2.push(day);
      }
    }

    tmp = this.state;
    tmp.days = ls2;
    this.setState(tmp);

    this.props.setDays(this.state.days);
    console.log('-->Days> ', this.state.days);
  }

  //Submit to make Api call....................To the back End..................

  handleonsubmit(event) {
    event.preventDefault();
    let data = this.builderOfficeHours();
    //http PUT profiles/ofice_hours isn't implemented yet, so just log
    console.log('/profiles/office_hours', data);
  }

  /**
 * Edit office hours 
 * @param {String} buildOficeHours office_hours 
 * @param {Object} data Data passed in
 * @return {Promise.<Object>} Response body
 
  * editOffice_hours = (data) => {
 * return http.put('profiles/office_hours',data);
*};
             <Button onClick={this.handleonsubmit} onClick={this.handleClose} color="primary"  autoFocus>
              Submit
            </Button>
*/

  builderOfficeHours() {
    let str = 'OfficeHours:';
    for (var i in this.state.days) {
      let row = this.state.days[i];
      str = str + ' ' + row.val1 + ' from: ' + row.start + ' To: ' + row.end + ' , ';
    }
    return str;
  }
  //arrays of labels Monday, Tuesday , Wednesday, Thursday and Friday.
  renderInputTable() {
    let arr = [
      { nameCheck: 'checkMon', nameLabel: 'Monday' },
      { nameCheck: 'checkTues', nameLabel: 'Tuesday' },
      { nameCheck: 'checkWeds', nameLabel: 'Wednesaday' },
      { nameCheck: 'checkThurs', nameLabel: 'Thursday' },
      { nameCheck: 'checkFri', nameLabel: 'Friday' },
    ];

    return arr.map(row => {
      return (
        <tr>
          <td>
            <FormControlLabel
              control={
                <Checkbox name={row.nameCheck} onChange={this.handleCheck2} value={row.nameCheck} />
              }
              label={row.nameLabel}
            />
          </td>
          <td>
            <form noValidate>
              <TextField
                id="timepicker_12h"
                label="Start Time"
                type="time"
                name={row.nameCheck + 'StartTime'}
                onChange={this.handleTime2}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </form>
          </td>
          <td>
            <form noValidate>
              <TextField
                id="timepicker_12h"
                label="Start Time"
                type="time"
                name={row.nameCheck + 'EndTime'}
                onChange={this.handleTime2}
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
      );
    });
  }

  getCheckedValue(key) {}
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
          <div style={{ width: '100%' }}>
            <Button
              style={{ float: 'right', marginRight: '5px', width: 5 }}
              align="right"
              onClick={this.handleClose}
              color="secondary"
            >
              X
            </Button>
          </div>
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
                    {this.state.entries.map(row => {
                      return (
                        <TableRow>
                          <TableCell> {row.val1} </TableCell>
                          <TableCell>
                            {row.start} &nbsp;&nbsp;{row.end}
                          </TableCell>
                          <TableCell>
                            {' '}
                            <a
                              onClick={() => {
                                this.deleteRow(row.val1);
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                              Delete
                            </a>
                          </TableCell>
                        </TableRow>
                      );
                    })}
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
                          name="checkMon"
                          checked={this.state.checkMon}
                          onChange={this.handleCheck2}
                          value="checkMon"
                        />
                      }
                      label="Monday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="checkTues"
                          checked={this.state.checkTues}
                          onChange={this.handleCheck2}
                          value="checkTues"
                        />
                      }
                      label="Tuesday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="checkWeds"
                          checked={this.state.checkWeds}
                          onChange={this.handleCheck2}
                          value="checkWeds"
                        />
                      }
                      label="Wednesday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="checkThurs"
                          checked={this.state.checkThurs}
                          onChange={this.handleCheck2}
                          value="checkThurs"
                        />
                      }
                      label="Thursday"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="checkFri"
                          checked={this.state.checkFri}
                          onChange={this.handleCheck2}
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
                    id="timepicker_12h"
                    label="Start Time"
                    type="time"
                    name="startTime"
                    onChange={this.handleTime2}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                  <TextField
                    id="timepicker_12h"
                    label="End Time"
                    type="time"
                    name="endTime"
                    onChange={this.handleTime2}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 min
                    }}
                  />
                  <Button onClick={this.onAddClick} color="primary">
                    Add
                  </Button>
                </form>
              </td>
            </tr>
          </DialogContent>
          <DialogActions />
        </Dialog>
      </div>
    );
  }
}
export default DialogApp;
