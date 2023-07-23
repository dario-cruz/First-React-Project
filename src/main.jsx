import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HelloWorld from './helloworld.jsx'
import Paragraph from './intro'
import RandoElement from './randoElement'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld />
    <Paragraph />
    <RandoElement />
  </React.StrictMode>,
)
