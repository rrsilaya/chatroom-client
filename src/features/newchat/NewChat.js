import React, { Component } from 'react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class NewChat extends Component {
  render() {
    const { isOpen, handleFormSubmit } = this.props;

    return (
      <Dialog open={isOpen}>
        <DialogTitle>Enter Name</DialogTitle>
        <DialogContent>
          <form id="newchat" onSubmit={handleFormSubmit}>
            <TextField margin="dense" name="username" label="Username" fullWidth autoFocus/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" form="newchat" type="submit">Start</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default NewChat;