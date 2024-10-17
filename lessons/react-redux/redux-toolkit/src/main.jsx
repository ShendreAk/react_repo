import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux";
import dataStore from "./store";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={dataStore}>
      <App />
    </Provider>
  </StrictMode>
)
