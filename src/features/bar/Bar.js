import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';

class Bar extends Component {
  render() {
    const { classes, toggleDrawer } = this.props;

    return (
      <AppBar position="static" className={classNames(classes.appbar)}>
        <Toolbar>
          <IconButton color="contrast" onClick={toggleDrawer}><MenuIcon/></IconButton>
          <Typography type="title" color="inherit" style={{ flex: 1 }}>{this.props.title}</Typography>
          <IconButton color="contrast"><ArrowDropDownIcon/></IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = theme => ({
  appbar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1
  }
});

export default withStyles(styles, { withTheme: true })(Bar);