import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// oxide:top-imports

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      {/* oxide:providers-start */}
      <App />
      {/* oxide:providers-end */}
    </React.StrictMode>,
  );
}
