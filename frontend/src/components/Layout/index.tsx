import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';


function Layout() {
  return (
    <div className='grid grid-cols-12 w-full h-full'>
      <SideBar />
      <Outlet />
    </div> 

  );
}

export default Layout;