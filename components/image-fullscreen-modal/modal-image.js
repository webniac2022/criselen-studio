import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { useAppContext } from '../../context/context';

const myLoader = ({ src, width, quality }) => {
  return `https:${src}?q=${quality || 95}`;
};

function ModalImage({ images, currentIndex, dimensions }) {
  const { modal, openModal, closeModal } = useAppContext();

  return (
    <Modal open={modal} onClose={closeModal} sx={{ background: 'black' }}>
      <Grid container pt={1} pb={1}>
        <Grid item container justifyContent="right" pr={2}>
          <CloseIcon
            fontSize="large"
            sx={{
              zIndex: 1200,
              position: 'absolute',
              fill: '#48E7C3',
              top: '2rem',
              '&:hover': {
                cursor: 'pointer',
                transform: 'scaleX(1.02) scaleY(1.02)',
                transition: '0.5s ease',
              },
            }}
            onClick={closeModal}
          />
        </Grid>

        <Grid
          item
          container
          xs={12}
          sx={{ position: 'relative', width: '100vw', height: '100vh' }}
        >
          <Image
            src={images[currentIndex].url}
            alt={images[currentIndex].title}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            loader={myLoader}
          />
        </Grid>
      </Grid>
    </Modal>
  );
}

export default ModalImage;
