import React, { Component } from 'react';

import Bar from '../features/bar/Bar';
import Sidebar from '../features/sidebar/Sidebar';
import Chatbox from '../features/chatbox/Chatbox';

import { toggleDrawer } from './methods';

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: true,
    }

    this.toggleDrawer = toggleDrawer.bind(this);
  }

  render() {
    const messages = ['Lorem ipsum keme keme keme 48 years wrangler daki Gino nakakalurky chopopo', 'at nang borta bigalou warla sa ang waz at bakit chuckie kasi jongoloids tanders ano', 'bigalou ng na at ang ang na ang emena gushung katagalugan ma-kyonget at nang shontis ng', 'boyband kabog urky doonek at nang bonggakea urky tanders bakit sangkatuts boyband neuro', 'chipipay at bakit matod ano bakit shonga bakit shogal ano na ang pamenthol 48 years tetetet chuckie at ang Cholo 48', 'Lorem ipsum keme keme keme 48 years wrangler daki Gino nakakalurky chopopo', 'at nang borta bigalou warla sa ang waz at bakit chuckie kasi jongoloids tanders ano', 'bigalou ng na at ang ang na ang emena gushung katagalugan ma-kyonget at nang shontis ng', 'boyband kabog urky doonek at nang bonggakea urky tanders bakit sangkatuts boyband neuro', 'chipipay at bakit matod ano bakit shonga bakit shogal ano na ang pamenthol 48 years tetetet chuckie at ang Cholo 48'];

    return (
      <div style={styles.root}>
        <Bar title="Chat App" toggleDrawer={this.toggleDrawer}/>
        <Sidebar isOpen={this.state.drawerOpen} />
        <Chatbox messages={messages} />
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
