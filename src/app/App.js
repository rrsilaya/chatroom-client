import React, { Component } from 'react';

import Bar from '../features/bar/Bar';
import Sidebar from '../features/sidebar/Sidebar';
import View from '../features/chatbox/View';
import NewChat from '../features/newchat/NewChat';

import { toggleDrawer, handleNewChat } from './methods';

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: true,
      newchat: true,
      user: {}
    }

    this.toggleDrawer = toggleDrawer.bind(this);
    this.handleNewChat = handleNewChat.bind(this);
  }

  render() {
    return (
      <div style={styles.root}>
        <Bar title="Chat App" toggleDrawer={this.toggleDrawer}/>
        <Sidebar isOpen={this.state.drawerOpen} />
        <View user={this.state.user} />
        <NewChat handleFormSubmit={this.handleNewChat} isOpen={this.state.newchat} />
      </div>
    );
  }
}

const styles = {
  root: {
    position: 'relative',
    display: 'flex',
    height: '100vh'
  }
}

export default App;
