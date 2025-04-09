// src/Layouts/Sidebar.tsx
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: '', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Academic', path: '/academic' },
  { label: 'Research', path: '/research' },
  { label: 'Facilities', path: '/facilities' },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        CSD & CSIT
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component={Link} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            CSD & CSIT
          </Typography>
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  color="inherit"
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Sidebar;
