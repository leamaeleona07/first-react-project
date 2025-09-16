import ReactDOM from "react-dom/client";
import './index.css';
import App from './App.jsx';
import { StrictMode } from "react";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);