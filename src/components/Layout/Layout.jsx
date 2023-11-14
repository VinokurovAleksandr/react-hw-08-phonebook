import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AuthBar/AppBar/AppBar';
// import GrowExample from '../Loader/Loader';
import { LoyoutContainer } from './Loyout.styled';
import { Toaster } from 'react-hot-toast';





 const Layout = () => {
   return (
      <LoyoutContainer>
        <AppBar />
      <Suspense fallback={null}>
        <Outlet />
       </Suspense>
        <Toaster
        position="top-right"
        reverseOrder={false}
      />
      </LoyoutContainer>
    
  );
};

export default Layout;