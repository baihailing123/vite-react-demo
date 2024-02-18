import React from 'react'
import ReactDOM from 'react-dom/client'

// routes
import './common/resize.js'
import App from './router/index.jsx';
import './App.less'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
