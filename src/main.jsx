import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import './assets/css/toast-notify.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <ToastContainer
          position="center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition: Bounce
          progressClassName="toastProgress"
          bodyClassName="toastBody"
      />
  </StrictMode>,
)
