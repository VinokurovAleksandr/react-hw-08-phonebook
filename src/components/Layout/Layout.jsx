import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AuthBar/AppBar/AppBar';

 const Layout = () => {
  return (
    <>
        <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
    
      
      // {/* <Toaster position="top-right" reverseOrder={false} /> */}
    
  );
};

export default Layout;