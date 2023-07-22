import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HelloWorld from './helloworld.jsx'
import Paragraph from './intro'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld />
    <Paragraph />
  </React.StrictMode>,
)
