import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './redax/stor'
import  App  from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>   
  </React.StrictMode>
);
