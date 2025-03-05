'use client';

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#ffffff',
  border: '1px solid #d1d1d1',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    border: 'none',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '60ch',
      },
    },
  },
}));

const categoryLinks = [
  { label: 'Tires', href: '/category/tires' },
  { label: 'Wheels', href: '/category/wheels' },
  { label: 'Accessories', href: '/category/accessories' },
  { label: 'Offroad', href: '/category/offroad' },
];

export default function SearchAppBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if it's mobile

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        (event as React.KeyboardEvent).key === 'Tab'
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {!isMobile && (
        <AppBar
          position="static"
          sx={{
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #d1d1d1',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgb(219, 219, 219)',
            }}
          >
            <Typography
              component="a"
              href="/"
              sx={{
                textDecoration: 'none',
              }}
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                style={{ height: 60, width: 'auto' }}
              />
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Search sx={{ color: 'black' }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',

                justifyContent: 'flex-end',
              }}
            >
              <IconButton sx={{ color: 'black' }}>
                <PermIdentityIcon />
              </IconButton>
              <IconButton sx={{ color: 'black' }}>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton sx={{ color: 'black' }}>
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Toolbar>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center',
              minHeight: '36px',
              padding: '4px 16px',
              gap: 5,
            }}
          >
            {categoryLinks.map((item) => (
              <Typography
                key={item.label}
                component="a"
                href={item.href}
                sx={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: '13px',
                  fontWeight: 600,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  lineHeight: '33px',
                  borderBottom: '2px solid transparent',
                  transition: 'border-bottom 0.2s ease-in-out',
                  '&:hover': { borderBottom: '2px solid rgb(209, 170, 0)' },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </AppBar>
      )}

      {isMobile && (
        <AppBar
          position="static"
          sx={{
            backgroundColor: '#f8f9fa',
            borderBottom: '1px solid #d1d1d1',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgb(219, 219, 219)',
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ ml: 0 }}
            >
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>

            <Typography
              component="a"
              href="/"
              sx={{
                textDecoration: 'none',
              }}
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                style={{ height: 60, width: 'auto' }}
              />
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',

                justifyContent: 'flex-end',
              }}
            >
              <IconButton sx={{ color: 'black' }}>
                <PermIdentityIcon />
              </IconButton>
              <IconButton sx={{ color: 'black' }}>
                <ShoppingCartIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      )}

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {categoryLinks.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component="a" href={item.href}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/profile">
                <PermIdentityIcon sx={{ mr: 2 }} />
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/favorites">
                <FavoriteBorderIcon sx={{ mr: 2 }} />
                <ListItemText primary="Favorites" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/cart">
                <ShoppingCartIcon sx={{ mr: 2 }} />
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
