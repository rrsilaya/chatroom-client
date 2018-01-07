import React, { Component } from 'react';

import Input from 'material-ui/Input';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import { CircularProgress } from 'material-ui/Progress';
import SendIcon from 'material-ui-icons/Send';

import { autoScroll, handleSend, handleGetMessage } from './methods';

class Chatbox extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      messages: []
    }

    this.autoScroll = autoScroll.bind(this);
    this.handleSend = handleSend.bind(this);
    this.handleGetMessage = handleGetMessage.bind(this);
  }

  componentDidMount() {
    this.handleGetMessage(this.props.match.params.id);
  }

  componentDidUpdate() { this.autoScroll(); }

  componentWillReceiveProps(props) {
    this.handleGetMessage(props.match.params.id);
  }

  render() {
    const activemessage = {
      ...styles.message,
      ...styles.usermessage
    };

    return (
      <main style={styles.wrapper}>
        <div style={styles.messages}>
          {
            this.state.isLoading ?
            <div style={styles.centerLoader}>
              <CircularProgress thickness={5} size={30} />
            </div> :
            !this.state.messages.length ? (
              <div style={styles.centerLoader}>
                <Typography type="caption">Start sending messages now</Typography>
              </div>
            ) :
            <ul style={styles.msgs}>
              {this.state.messages.map(message => (
                <li key={message._id} style={styles.list}>
                  <Typography type="caption" style={styles.caption}>{message.sender}</Typography>
                  <div style={message.senderID === this.props.user.userID ? activemessage : styles.message}>
                    <Typography type="body1" color={message.senderID === this.props.user.userID ? "inherit" : ''}>{message.message}</Typography>
                  </div>
                </li>
              ))}
            </ul>
          }
          <div ref={el => this.messages = el} />
        </div>
        <form style={styles.prompt} autoComplete="off" onSubmit={this.handleSend}>
          <Input placeholder="Type your message" style={styles.promptInput} name="message" disableUnderline required/>
          <IconButton type="submit"><SendIcon/></IconButton>
        </form>
      </main>
    );
  }
}

const styles = {
  wrapper: {
    width: '100%',
    flex: 1,
    height: 'calc(100% - 56)',
    marginTop: 56,
    display: 'flex',
    flexDirection: 'column'
  },
  messages: {
    flex: 1,
    padding: 24,
    overflowY: 'auto'
  },
  prompt: {
    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    padding: 10,
    display: 'flex'
  },
  promptInput: {
    flex: 1
  },
  msgs: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  list: {
    marginBottom: 10,
    paddingRight: 50
  },
  message: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#efefef',
    borderRadius: '1em',
    maxWidth: 400,
    display: 'inline-block'
  },
  usermessage: {
    backgroundColor: '#607d8b',
    color: 'white'
  },
  caption: {
    marginLeft: 10,
    marginBottom: 3
  },
  centerLoader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 15
  }
}

export default Chatbox;