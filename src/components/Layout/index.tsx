import { Container } from './styles';

import Navbar from '../Navbar';
import Topbar from '../Topbar';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
  noNavbar?: boolean;
}

const Layout = ({ noNavbar, children }: LayoutProps) => {
  return (
    <>
      <Topbar />
      <Container>
        {!noNavbar && <Navbar />}

        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
