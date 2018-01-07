import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Chatbox from './Chatbox';

class View extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" />
        <Route exact path="/:id" render={props => <Chatbox {...props} user={this.props.user}/>} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default View;