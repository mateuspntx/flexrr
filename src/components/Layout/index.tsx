import { Container } from './styles';

import Navbar from '../Navbar';
import Topbar from '../Topbar';

interface LayoutProps {
  children: React.ReactNode;
  noNavbar?: boolean;
  showHeader?: boolean;
}

const Layout = ({ noNavbar, showHeader, children }: LayoutProps) => {
  return (
    <>
      <Topbar />
      <Container>
        {!noNavbar && <Navbar />}

        {children}
      </Container>
    </>
  );
};

export default Layout;
