import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/es/integration/react';
import SplashScreen from 'views/SplashScreen';
import Router from 'router/Router';
import reportWebVitals from 'reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let body = document.getElementsByTagName('body')[0];
body.style.height = 'fit-content'

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<SplashScreen />}>
        <Router />
      </PersistGate>
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
