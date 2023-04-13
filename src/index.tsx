import { createRoot } from 'react-dom/client'
import App from './app'
import { BrowserRouter } from 'react-router-dom'



let root = document.getElementById('root') as HTMLElement
createRoot(root).render( <BrowserRouter><App /></BrowserRouter>)
