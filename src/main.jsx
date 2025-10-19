import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import TicketDownload from './pages/TicketDownload.jsx'
import AccessDenied from './pages/AccessDenied.jsx'
import ExternalAccess from './pages/ExternalAccess.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ticket" element={<TicketDownload />} />
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="/external-access" element={<ExternalAccess />} />
      </Routes>
    </Router>
  </StrictMode>,
)
