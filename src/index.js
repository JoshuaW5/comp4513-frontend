import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from '../node_modules/react-router-dom';
import './mystyles.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
