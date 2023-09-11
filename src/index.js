import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags } from '@fortawesome/free-solid-svg-icons'
import './index.css'

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

