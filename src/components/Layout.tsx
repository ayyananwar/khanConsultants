import { Outlet } from 'react-router-dom';
import Navbar from './Header';
import Footer from './Footer';
import { designTokens } from '../tokens';

const Layout = () => {
  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
