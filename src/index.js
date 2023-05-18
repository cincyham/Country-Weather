import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import { Provider } from "react-redux";
import { store } from "./store";
import App from './App';
import { NavigationProvider } from "./context/navigation";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NavigationProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </NavigationProvider>
);
