import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main className="main-content-wrapper">
        {' '}
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
export default Layout;
