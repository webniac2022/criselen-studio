import Image from 'next/image';
import Grid from '@mui/material/Grid';
import designer from '../../public/images/interior-designer.jpg';
import Typography from '@mui/material/Typography';
import classes from '../../styles/globals.module.css';
import Box from '@mui/material/Box';
import { placeholderImg } from '../../utils/blurData';

function About({ data }) {
  const { firstParagraph, secondParagraph } = data[0].fields;
  return (
    <Grid item container>
      <Grid item container justifyContent="center" mb={3}>
        <Typography variant="h4" align="center">
          Despre
        </Typography>
      </Grid>
      <Grid container direction="row">
        <Grid item container xs={12} sm={6} p={5} justifyContent="center">
          <Box
            sx={{ display: 'block', width: '100%', height: '100%' }}
            component="div"
          >
            <Image
              src={designer}
              alt="photo"
              layout="responsive"
              className={classes.aboutImg}
              priority
              placeholder="blur"
              blurDataURL={placeholderImg}
            />
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={6}
          direction="column"
          p={5}
          gap={2}
          justifyContent="space-around"
        >
          <Grid item container>
            <Typography variant="h5" align="left">
              {firstParagraph}
            </Typography>
          </Grid>
          <Grid item container>
            <Typography variant="h5" align="left">
              {secondParagraph}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
