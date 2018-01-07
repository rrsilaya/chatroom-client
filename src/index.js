import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './app/App';

import { MuiThemeProvider } from 'material-ui/styles';
import 'typeface-roboto';
import theme from './app/theme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
