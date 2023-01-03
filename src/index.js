import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

console.log(process.env.REACT_APP_AUTH0_DOMAIN)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={'dev-lfgvnkuqghzticr8.us.auth0.com'}
    clientId={'Vy9upq5u3Hex2fTLbQ2a9GVjGc0TmVN9'}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
