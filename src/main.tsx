
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Set up browser history
const history = createBrowserHistory();

// Track page views when the location changes
history.listen(({ location }) => {
  if (window.gtag) {
    window.gtag('config', 'G-ESGDVFXLGZ', {
      page_path: location.pathname + location.search
    });
  }
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);
