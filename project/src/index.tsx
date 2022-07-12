import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const COUNT_OF_AVAILABLE_PLACES = 100;

root.render(
  <React.StrictMode>
    <App countOfAvailablePlaces={COUNT_OF_AVAILABLE_PLACES}/>
  </React.StrictMode>,
);
