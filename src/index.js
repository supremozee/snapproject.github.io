import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { AuthContextProviderv } from './Store/Auth-context';

ReactDOM.render(
    <AuthContextProviderv>
<App />
    </AuthContextProviderv>
, document.getElementById('root'));
