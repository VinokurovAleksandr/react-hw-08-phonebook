import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import {store, persistor} from './components/redux/store';
import { Provider } from "react-redux";
import './index.css';


import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading='null' persistor={persistor}>
        <BrowserRouter>
           <App />
        </BrowserRouter> 
      </PersistGate>
    </Provider>
    
  </React.StrictMode>
);
