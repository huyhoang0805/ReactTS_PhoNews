import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import  {ButtonRed} from "./Components/Button/Button.tsx"
//rfc -> function
//rfce -> function ... export
//rcc -> class

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <ButtonRed name='duc'/> */}
  </React.StrictMode>,
)
