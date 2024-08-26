import React from 'react';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logoround from '../../assets/images/logoround.jpg';

interface Props {
  getWindow?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: 'Занятия', link: '/classes' },
  { name: 'Расписание', link: '/schedule' },
  { name: 'Прайс', link: '/price' },
];

export default function Header(props: Props) {
  const { getWindow } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 2 }}>
        <img src={logoround} alt="Гармония движения" style={{ width: '100px', height: '100px', marginTop: '10px'}} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to={item.link}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = getWindow !== undefined ? () => getWindow().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#9370DB' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

         
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: 'none', sm: 'block' },
              marginRight: 'auto',
            }}
          >
            <img src={logoround} alt="Гармония движения" style={{ width: '50px', height: '50px', marginTop: '7px' }} />
          </Box>

          
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', sm: 'none' },
              justifyContent: 'center',
            }}
          >
            <img src={logoround} alt="Гармония движения" style={{ width: '50px', height: '50px', marginTop: '7px', marginBottom: '7px' }} />
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button key={item.name} component={Link} to={item.link} sx={{ color: '#fff', border: 'none' }}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
