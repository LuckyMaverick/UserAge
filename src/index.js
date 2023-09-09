import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss'
import UserAgeRegister from "./js/UserAgeRegister";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAgeRegister />
  </React.StrictMode>
);
