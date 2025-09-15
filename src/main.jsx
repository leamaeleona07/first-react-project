import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Home.jsx'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

createRoot(document.getElementById('root')).render(
      <Router>
    <StrictMode>
      <Switch>
            <Route path="/">
            <Home />
            </Route>
          </Switch>
    </StrictMode>,
    </Router>
)
