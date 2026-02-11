import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import ScrollToTop from './components/ScrollToTop'

// Import all service pages
import LegalServices from './pages/services/LegalServices'
import GSTAccounting from './pages/services/GSTAccounting'
import ImportExport from './pages/services/ImportExport'
import VisasImmigration from './pages/services/VisasImmigration'
import KolkataCorporation from './pages/services/KolkataCorporation'
import Certificates from './pages/services/Certificates'
import Licenses from './pages/services/Licenses'
import Property from './pages/services/Property'
import GovernmentIDs from './pages/services/GovernmentIDs'

// Main application with routing configuration
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/legal" element={<LegalServices />} />
          <Route path="/services/gst-accounting" element={<GSTAccounting />} />
          <Route path="/services/import-export" element={<ImportExport />} />
          <Route path="/services/visas-immigration" element={<VisasImmigration />} />
          <Route path="/services/kolkata-corporation" element={<KolkataCorporation />} />
          <Route path="/services/certificates" element={<Certificates />} />
          <Route path="/services/licenses" element={<Licenses />} />
          <Route path="/services/property" element={<Property />} />
          <Route path="/services/government-ids" element={<GovernmentIDs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
