import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './sass/base.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as FullStory from '@fullstory/browser';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-189051630-1');
ReactGA.pageview(window.location.pathname + window.location.search);

FullStory.init({ orgId: '10B7DQ' });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
