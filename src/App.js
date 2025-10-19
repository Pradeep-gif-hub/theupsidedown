import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicketDownload from './pages/TicketDownload.jsx';
import AccessDenied from './pages/AccessDenied';
import ExternalAccess from './pages/ExternalAccess';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<TicketDownload />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="/external-access" element={<ExternalAccess />} />
          <Route path="/ticket" element={<TicketDownload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
