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
    startt:'00:00',
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
