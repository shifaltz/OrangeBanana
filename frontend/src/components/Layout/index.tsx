import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import Box from '@mui/material/Box';

function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Outlet />
    </Box>
  );
}

export default Layout;