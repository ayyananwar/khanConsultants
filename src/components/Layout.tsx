import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Header';
import Footer from './Footer';
import { designTokens } from '../tokens';
import ServiceEnquiryModal from './ServiceEnquiryModal';
import BirthCertificateBookingModal from './BirthCertificateBookingModal';
import { SERVICE_ENQUIRY_OPEN_EVENT, type ServiceEnquiryOpenDetail } from '../lib/serviceEnquiryLauncher';
import { BIRTH_BOOKING_OPEN_EVENT } from '../lib/birthBookingLauncher';
import type { ServiceType } from '../types/serviceEnquiry';

const Layout = () => {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isBirthBookingOpen, setIsBirthBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceType | undefined>(undefined);

  useEffect(() => {
    const serviceHandler = (event: Event) => {
      const customEvent = event as CustomEvent<ServiceEnquiryOpenDetail>;
      setPreselectedService(customEvent.detail?.serviceType);
      setIsServiceModalOpen(true);
    };

    const birthHandler = () => {
      setIsBirthBookingOpen(true);
      setIsServiceModalOpen(false);
      setPreselectedService(undefined);
    };

    window.addEventListener(SERVICE_ENQUIRY_OPEN_EVENT, serviceHandler);
    window.addEventListener(BIRTH_BOOKING_OPEN_EVENT, birthHandler);
    return () => {
      window.removeEventListener(SERVICE_ENQUIRY_OPEN_EVENT, serviceHandler);
      window.removeEventListener(BIRTH_BOOKING_OPEN_EVENT, birthHandler);
    };
  }, []);

  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ServiceEnquiryModal
        isOpen={isServiceModalOpen}
        preselectedService={preselectedService}
        onClose={() => {
          setIsServiceModalOpen(false);
          setPreselectedService(undefined);
        }}
      />
      <BirthCertificateBookingModal
        isOpen={isBirthBookingOpen}
        onClose={() => {
          setIsBirthBookingOpen(false);
          setIsServiceModalOpen(false);
          setPreselectedService(undefined);
        }}
      />
    </div>
  );
};

export default Layout;
