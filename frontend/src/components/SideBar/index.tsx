import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListRouter from '../ListRouter';
const drawerWidth = 240;

export default function SideBar() {
  return (
    <>
     <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#2C2C2C',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ 
            height: 130,
            textAlign: 'center',
            justifyContent: 'center', 
            color: '#ED9121',
            fontWeight: 'bold',
            fontSize: 24,
            marginBottom: 2,
        }}>
            Orange Juice Events
        </Toolbar>

        <Divider />

        <ListRouter />

        <List>
        </List>

      </Drawer>
    </>
  );
}
