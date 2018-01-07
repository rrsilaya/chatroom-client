import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class Sidebar extends Component {
  render() {
    const { classes, isOpen } = this.props;

    return (
      <Drawer type="permanent" classes={{
        paper: classNames(classes.drawer, !isOpen && classes.drawerClose)
      }}>
        <div className={classNames(classes.wrapper)}>
          <List>
            <ListItem button>
              <Avatar>RL</Avatar>
              <ListItemText primary="Ralph Lawrence" secondary="Ralph Lawrence Silaya" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

const styles = theme => ({
  drawer: {
    position: 'relative',
    height: 'calc(100% - 56px)',
    width: 275,
    marginTop: 56,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: 70,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  wrapper: {
    width: 275,
    marginTop: 10
  }
});

export default withStyles(styles, { withStyle: true })(Sidebar);