import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'
import SeoManager from './components/SeoManager'

// Import all service pages
import LegalServices from './pages/services/LegalServices'
import GSTAccounting from './pages/services/GSTAccounting'
import ImportExport from './pages/services/ImportExport'
import VisasImmigration from './pages/services/VisasImmigration'
import KolkataCorporation from './pages/services/KolkataCorporation'
import Certificates from './pages/services/Certificates'
import Licenses from './pages/services/Licenses'
import Property from './pages/services/Property'

// Main application with routing configuration
function App() {
  return (
    <Router>
      <ScrollToTop />
      <SeoManager />
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
          <Route path="/services" element={<Navigate to="/services/kolkata-corporation" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
