import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const AVAILABLE_PLACES_AMOUNT = 6;

root.render(
  <React.StrictMode>
    <App availablePlacesAmount={AVAILABLE_PLACES_AMOUNT}/>
  </React.StrictMode>,
);
