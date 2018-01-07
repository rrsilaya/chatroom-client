import React, { Component } from 'react';

import Input from 'material-ui/Input';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui-icons/Send';

class Chatbox extends Component {
  autoScroll = () => {
    this.messages.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    this.autoScroll();
  }

  componentDidUpdate() {
    this.autoScroll();
  }

  render() {
    return (
      <main style={styles.wrapper}>
        <div style={styles.messages}>
          <ul style={styles.msgs}>
            {this.props.messages.map((m, i) => (
              <li key={i} style={styles.list}>
                <Typography type="caption" style={styles.caption}>Alexander</Typography>
                <div style={styles.message}>
                  <Typography type="body1">{m}</Typography>
                </div>
              </li>
            ))}
          </ul>
          <div ref={el => this.messages = el} />
        </div>
        <form style={styles.prompt} autoComplete="off">
          <Input placeholder="Type your message" style={styles.promptInput} name="message" disableUnderline/>
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
    padding: 10,
    backgroundColor: '#efefef',
    borderRadius: 10,
    maxWidth: 400
  },
  caption: {
    marginLeft: 10,
    marginBottom: 3
  }
}

export default Chatbox;