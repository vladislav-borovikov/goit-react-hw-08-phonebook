import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store, persistor} from './redax/stor'
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <App />
      </BrowserRouter>
    </Provider>   
    {/* </PersistGate> */}
  </React.StrictMode>
);
