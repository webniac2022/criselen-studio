import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '../link/link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useAppContext } from '../../context/context';
import Navbar from '../navbar/navbar';
import SideDrawer from '../sidedrawer/sidedrawer';
import BackToTop from '../back-to-top/back-to-top';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Logo from '../logo/logo';
import Stack from '@mui/material/Stack';

function Header() {
  const { toggleTheme, mode, services } = useAppContext();

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: 'transparent',
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container direction="row" id="#back-to-top-anchor">
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
                <IconButton
                  size="small"
                  edge="start"
                  aria-label="home"
                  disableRipple
                >
                  <Box
                    component={Link}
                    href="/"
                    scroll={false}
                    underline="none"
                  >
                    <Stack direction="column" alignItems="center">
                      <Logo />
                      <Typography variant="h4">Criselen Studio</Typography>
                    </Stack>
                  </Box>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={toggleTheme}
                  sx={{ height: 40 }}
                  aria-label="light mode dark mode icon"
                >
                  {mode === 'light' ? (
                    <LightModeIcon
                      sx={{ fill: '#FF0000' }}
                      aria-label="Light mode icon"
                    />
                  ) : (
                    <DarkModeIcon
                      sx={{ fill: '#F0E68C' }}
                      aria-label="Dark mode icon"
                    />
                  )}
                </IconButton>
              </Grid>
              <Grid item component="div">
                <Navbar navLinks={services} />
                <SideDrawer navLinks={services} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <BackToTop>
        <Fab
          color="primary"
          size="large"
          aria-label="Back to top"
          sx={{
            '&:hover': { opacity: 0.7 },
            boxShadow: '3px 4px 4px 2px #48E7C3',
          }}
        >
          <KeyboardArrowUpIcon sx={{ fill: '#48E7C3' }} />
        </Fab>
      </BackToTop>
    </>
  );
}

export default Header;
