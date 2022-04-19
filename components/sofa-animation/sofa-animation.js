import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import room from '../../public/images/room.svg';

function SofaAnimation() {
  return (
    <Grid item container justifyContent="center">
      <Image src={room} alt="room" />
    </Grid>
  );
}

export default SofaAnimation;
