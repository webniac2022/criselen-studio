import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    message: '',
    showAlert: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <Grid container mb={5}>
      <Grid item container justifyContent="center" mb={3}>
        <Typography variant="h4" align="center">
          Contact
        </Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Box
          component="form"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success"
          sx={{ width: '70vw' }}
        >
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="nume" aria-label="name">
              Nume
            </InputLabel>
            <Input
              sx={{
                fontSize: 20,
                ':after': { borderBottomColor: 'rgba(56, 245, 197, 0.8)' },
              }}
              type="text"
              name="nume"
              id="nume"
              value={formData.nume}
              onChange={handleChange}
              required
              autoComplete="false"
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="email" aria-label="email">
              Email
            </InputLabel>
            <Input
              sx={{
                fontSize: 20,
                ':after': { borderBottomColor: 'rgba(56, 245, 197, 0.8)' },
              }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              required
              autoComplete="false"
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel htmlFor="message" aria-label="message">
              Mesaj
            </InputLabel>
            <Input
              sx={{
                fontSize: 20,
                ':after': { borderBottomColor: 'rgba(56, 245, 197, 0.8)' },
              }}
              type="textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={5}
              autoComplete="false"
            />
          </FormControl>
          <FormControl fullWidth margin="dense">
            <Button
              type="submit"
              sx={(theme) => ({
                height: '2.5rem',
                alignSelf: 'center',
                textTransform: 'none',
                fontSize: 26,
                '&:hover': { cursor: 'pointer', opacity: 0.6 },
                background: theme.primary,
                color: 'gray',
                fontWeight: 'bolder',
                boxShadow: '3px 4px 4px 2px #48E7C3',
              })}
              aria-label="Submit form"
            >
              Trimite
            </Button>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact;
