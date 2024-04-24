import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/navbar.css';
import './css/loading.css';

import App from './component/App';
import reportWebVitals from './reportWebVitals';
import Moment from "react-moment";
import 'moment/locale/pl';

Moment.globalLocale = 'pl';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

reportWebVitals();
