// src/Layouts/index.tsx
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const navItems = ['Home', 'About', 'Faculty', 'Academic', 'Research', 'Facilities'];

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold">
            CSD & CSIT
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={`/${item.toLowerCase()}`}
                sx={{ color: 'text.primary', fontWeight: 600 }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

export default Layout;
