import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import orientati from '../../public/images/orientati.jpg';
import classes from '../../styles/globals.module.css';
import Stack from '@mui/material/Stack';
import firstIcon from '../../public/images/firstIcon.png';
import secondIcon from '../../public/images/secondIcon.png';
import thirdIcon from '../../public/images/thirdIcon.png';
import fourthIcon from '../../public/images/fourthIcon.png';
import fifthIcon from '../../public/images/fifthIcon.png';
import sixthIcon from '../../public/images/sixthIcon.png';
import { placeholderImg } from '../../utils/blurData';

function Servicii({ data }) {
  const {
    firstParagraph,
    serviceOne,
    serviceTwo,
    serviceThree,
    serviceFour,
    serviceFive,
    serviceSix,
  } = data[0].fields;

  return (
    <Grid container spacing={5}>
      <Grid item container justifyContent="center">
        <Typography variant="h4" align="center">
          Servicii
        </Typography>
      </Grid>
      <Grid item container sx={{ display: 'block', position: 'relative' }}>
        <Image
          src={orientati}
          alt="orientati spre oameni"
          layout="responsive"
          priority
          quality={95}
          className={classes.serviciiImg}
          placeholder="blur"
          blurDataURL={placeholderImg}
        />
      </Grid>
      <Grid item container justifyContent="center" p={1}>
        <Typography variant="h5" align="left" width="90%">
          {firstParagraph}
        </Typography>
      </Grid>
      <Grid item container ml={4} component="div">
        <Grid item container justifyContent="left">
          <Stack direction="row" spacing={3} p={3} alignItems="center">
            <Image src={firstIcon} alt="service one" width={40} height={40} />
            <Typography variant="h6">{serviceOne}</Typography>
          </Stack>
        </Grid>
        <Grid item container justifyContent="left">
          <Stack direction="row" spacing={3} p={3} alignItems="center">
            <Image src={secondIcon} alt="service two" width={40} height={40} />
            <Typography variant="h6">{serviceTwo}</Typography>
          </Stack>
        </Grid>
        <Grid item container justifyContent="left">
          <Stack direction="row" spacing={3} p={3} alignItems="center">
            <Image src={thirdIcon} alt="service three" width={40} height={40} />
            <Typography variant="h6">{serviceThree}</Typography>
          </Stack>
        </Grid>
        <Grid item container justifyContent="left">
          <Stack direction="row" spacing={3} p={3} alignItems="center">
            <Image src={fourthIcon} alt="service four" width={40} height={40} />
            <Typography variant="h6">{serviceFour}</Typography>
          </Stack>
        </Grid>
        <Grid item container justifyContent="left">
          <Stack direction="row" spacing={3} p={3} alignItems="center">
            <Image src={fifthIcon} alt="service five" width={40} height={40} />
            <Typography variant="h6">{serviceFive}</Typography>
          </Stack>
        </Grid>
        <Grid item container justifyContent="left">
          <Stack direction="row" spacing={3} p={3} alignItems="center">
            <Image src={sixthIcon} alt="service six" width={40} height={40} />
            <Typography variant="h6">{serviceSix}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Servicii;
