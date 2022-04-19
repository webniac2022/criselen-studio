import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '../components/link/link';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useTheme } from '@mui/material/styles';

function SuccessFormPage() {
  const theme = useTheme();
  return (
    <Grid container justifyContent="center" gap={5} mb={10} mt={5}>
      <Grid item container justifyContent="center">
        <Alert severity="success" sx={{ fontSize: 20 }}>
          <AlertTitle>Mesaj trimis cu succes!</AlertTitle>
          Mesajul tau a fost trimis cu succes! Multumim pentru interesul si
          increderea acordata!
        </Alert>
      </Grid>
      <Grid item container justifyContent="center">
        <Button
          component={Link}
          href="/"
          sx={{
            height: '2.5rem',
            alignSelf: 'center',
            textTransform: 'none',
            fontSize: 26,
            '&:hover': { cursor: 'pointer', opacity: 0.6 },
            background: theme.primary,
            color: 'gray',
            fontWeight: 'bolder',
            boxShadow: '3px 4px 4px 2px #48E7C3',
          }}
        >
          Inapoi
        </Button>
      </Grid>
    </Grid>
  );
}

export default SuccessFormPage;
