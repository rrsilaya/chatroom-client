import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import AddIcon from 'material-ui-icons/Add';

import { getRooms } from '../../api';
import AddRoom from './AddRoom';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      rooms: [],
      isGettingRooms: true,
      addRoom: false
    }
  }

  componentDidMount() {
    getRooms().then(res => {
      this.setState({
        rooms: res.data.data,
        isGettingRooms: false
      });
      console.log(res.data.data)
    });
  }

  toggleAddRoom = () => { this.setState({ addRoom: !this.state.addRoom }); }

  render() {
    const { classes, isOpen } = this.props;

    return (
      <Drawer type="permanent" classes={{
        paper: classNames(classes.drawer, !isOpen && classes.drawerClose)
      }}>
        <div className={classNames(classes.wrapper)}>
          <List>
            <ListItem button onClick={this.toggleAddRoom}>
              <Avatar color="primary"><AddIcon/></Avatar>
              <ListItemText primary="Add New Room" />
            </ListItem>
            <Divider/>
            {
              this.state.isGettingRooms && (
                <div className={classNames(classes.centerLoader)}>
                  <CircularProgress thickness={5} size={30} />
                </div>
              )
            }
            {
              !this.state.rooms.length ?
              <div className={classNames(classes.centerLoader)}>
                <Typography type="caption">No chat rooms yet.</Typography>
              </div>
              :
              this.state.rooms.map(room => (
                <ListItem button key={room._id}>
                  <Avatar style={{ backgroundColor: room.color }}>
                    {room.name.substr(0, 2).toUpperCase()}
                  </Avatar>
                  <ListItemText primary={room.name} secondary={room.updated} />
                </ListItem>
              ))
            }
          </List>
        </div>
        <AddRoom isOpen={this.state.addRoom} toggleAddRoom={this.toggleAddRoom} />
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
  },
  centerLoader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 15
  }
});

export default withStyles(styles, { withStyle: true })(Sidebar);