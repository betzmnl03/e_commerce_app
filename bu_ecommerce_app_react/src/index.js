import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import 'semantic-ui-css/semantic.min.css'

import Test from "./components/Test"
const stripe = loadStripe("pk_test_51ITGsIIutuA3p6E2lplWD8xcg1I0La99gzvOBaDJ1L5Rruhz8N7GUXXHc61BaumSBsmJsFv8Anf3LPF1QwIfjzmj00QA5wK7nB");
ReactDOM.render(
  <React.Fragment>
    <Elements stripe={stripe}>
        <App />
        {/* <Test/> */}
    </Elements>
    
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
