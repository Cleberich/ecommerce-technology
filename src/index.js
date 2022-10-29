import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-3uwxiodphwflt514.us.auth0.com"
const clientId = "jNKcFaYgsDX7oaKsF4he8wYU9Dutu6xE"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider 
        domain={domain} 
        clientId={clientId} 
        redirectUri={window.location.origin}>
<App />
</Auth0Provider>
);

reportWebVitals();
