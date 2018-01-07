import React, { Component } from 'react';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { addRoom } from '../../api';

class AddRoom extends Component {
  handleFormSubmit = e => {
    e.preventDefault();
    addRoom({ name: e.target.name.value, color: '#' + (Math.random()*0xFFFFFF<<0).toString(16) });
    this.props.toggleAddRoom();
  }

  render() {
    const { isOpen, toggleAddRoom } = this.props;

    return (
      <Dialog
        open={isOpen}
        onClose={toggleAddRoom}>
        <DialogTitle>Add New Chat Room</DialogTitle>
        <DialogContent>
          <form id="addroom" onSubmit={this.handleFormSubmit}>
            <TextField margin="dense" name="name" label="Room Name" fullWidth autoFocus/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={toggleAddRoom}>Cancel</Button>
          <Button color="primary" form="addroom" type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddRoom;