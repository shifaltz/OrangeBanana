import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';



const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref,
) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  return (
    <li>
      <ListItem button component={Link} to={to}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default function ListRouter() {
  return (
      <Box sx={{ width: 360 }}>
        <Paper sx={{ bgcolor: '#2C2C2C' }} elevation={0}>
          <List sx={{ color: 'white' }} aria-label="main mailbox folders">
            <ListItemLink to="/home" primary="Home"/>
            <ListItemLink to="/my-events" primary="Meus Eventos"/>
          </List>
          <Divider sx={{ bgcolor: 'white' }} />
        </Paper>
      </Box>
  );
}
