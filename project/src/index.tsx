import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
// import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>,
);
