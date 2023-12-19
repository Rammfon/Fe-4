import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './translate/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <div className="container">
    <App />
    </div>
    </I18nextProvider>
  </React.StrictMode>
);


