import { sendMessage, getMessages } from '../../api';

export function autoScroll() {
  this.messages.scrollIntoView({ behavior: 'smooth' });
}

export function handleSend(e) {
  e.preventDefault();
  
  if (e.target.message.value.length) {
    const payload = {
      message: e.target.message.value,
      sender: this.props.user.username,
      senderID: this.props.user.userID
    };

    sendMessage(this.props.match.params.id, payload).then(res => {
      this.setState({ messages: [...this.state.messages, res.data.data] });
    })
    e.target.reset();
  }
}

export function handleGetMessage(id) {
  this.setState({ isLoading: true });
  getMessages(id).then(res => {
    this.setState({ messages: res.data.data, isLoading: false });
  })
}