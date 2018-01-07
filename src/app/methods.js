export function toggleDrawer() {
  this.setState({ drawerOpen: !this.state.drawerOpen });
}

export function handleNewChat(e) {
  e.preventDefault();
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

  this.setState({
    user: {
      username: e.target.username.value,
      userID: s4() + s4() + s4() + s4() + s4() + s4()
    },
    newchat: false
  });
}