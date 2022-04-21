import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '../link/link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useAppContext } from '../../context/context';
import Navbar from '../navbar/navbar';
import SideDrawer from '../sidedrawer/sidedrawer';
import BackToTop from '../back-to-top/back-to-top';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Logo from '../logo/logo';
import Stack from '@mui/material/Stack';
import SwitchTheme from '../switch-theme-component/switch-theme';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Header() {
  const { services } = useAppContext();

  return (
    <Fragment>
      <HideOnScroll>
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
                  <SwitchTheme />
                </Grid>
                <Grid item component="div">
                  <Navbar navLinks={services} />
                  <SideDrawer navLinks={services} />
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
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
    </Fragment>
  );
}

export default Header;
