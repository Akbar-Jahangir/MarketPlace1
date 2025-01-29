import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='w-full flex justify-center'>
    <div className='w-full max-w-[1440px]'>
    <App />
    </div>
    </div>
  </StrictMode>
)
