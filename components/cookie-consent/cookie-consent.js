import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import Link from '../link/link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

function CookieConsentComponent() {
  const theme = useTheme();
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="cris_stud_cook"
      flipButtons
      enableDeclineButton
      contentStyle={{ flex: '0 0 100%', textAlign: 'center' }}
      style={{
        background: theme.palette.primary.main,
        boxShadow: '2px 3px 3px 1px #48E7C3',
        zIndex: 3000,
        color: 'red',
        justifyContent: 'center',
        padding: '10px',
        borderTop: '2px solid #48E7C3',
        borderBottom: '2px solid #48E7C3',
      }}
      buttonStyle={{
        color: theme.palette.text.primary,
        background: 'transparent',
        boxShadow: '2px 3px 3px 1px #48E7C3',
        fontSize: '13px',
        alignItems: 'center',
        marginTop: 0,
      }}
      declineButtonStyle={{
        color: theme.palette.text.primary,
        background: 'transparent',
        boxShadow: '2px 3px 3px 1px #e61406',
        fontSize: '13px',
        alignItems: 'center',
        marginTop: 0,
      }}
      onDecline={() => {}}
      declineButtonText="Refuz"
      expires={150}
      setDeclineCookie={false}
      hideOnAccept={true}
      hideOnDecline={false}
    >
      <Grid container direction="column">
        <Grid item container justifyContent="center">
          <Typography variant="h6">Setari Cookies</Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <Typography variant="h6">
            Acest website utilizează cookie-uri pentru a va imbunatati
            experienta. Prin continuarea navigarii website-ului va acordati
            consimtamantul cu privire la acest aspect. Pentru mai multe detalii,
            va rugam consultati secțiunea{' '}
            <span>
              <Link
                href="/cookies"
                sx={{
                  color: theme.palette.text.primary,
                  textDecoration: 'none',
                  borderBottom: '1px solid #48E7C3',
                }}
              >
                Politica de cookies.
              </Link>
            </span>
          </Typography>
        </Grid>
      </Grid>
    </CookieConsent>
  );
}

export default CookieConsentComponent;
