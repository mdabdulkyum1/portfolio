import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import BackToTop from './components/Shared/BackToTop/BackToTop'

import { HelmetProvider } from 'react-helmet-async';
import ClickEffect from './components/ClickEffect';
import Bubble from './components/Bubble';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
        <RouterProvider router={router} />
        <BackToTop></BackToTop>
        <ClickEffect></ClickEffect>
        <Bubble></Bubble>
    </HelmetProvider>
  </StrictMode>,
)
