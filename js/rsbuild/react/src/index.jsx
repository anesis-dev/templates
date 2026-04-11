import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// oxide:top-imports

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* oxide:providers-start */}
    <App />
    {/* oxide:providers-end */}
  </React.StrictMode>,
);
