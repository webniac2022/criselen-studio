import { useAppContext } from '../context/context';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import { useSwipeable } from 'react-swipeable';

const myLoader = ({ src, width, quality }) => {
  return `https:${src}?q=${quality || 95}`;
};

function Carousel() {
  const { carouselInfo, setCarouselInfo, openModal, modal } = useAppContext();
  const { images, currentIndex } = carouselInfo;
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  const [renderC, setRenderC] = useState(false);
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => handleClickNext(),
    onSwipedRight: (eventData) => handleClickPrev(),
  });

  useEffect(() => {
    if (images.length > 0) {
      const mw =
        images.reduce((add, next) => add + next.width, 0) / images.length;
      const mh =
        images.reduce((add, next) => add + next.height, 0) / images.length;

      setDimensions({ w: mw, h: mh });
    }
  }, [images]);

  useEffect(() => {
    if (dimensions.w !== 0 && dimensions.h !== 0) {
      setRenderC(true);
    }
  }, [dimensions]);

  function handleClickNext() {
    currentIndex < images.length - 1
      ? setCarouselInfo({ ...carouselInfo, currentIndex: currentIndex + 1 })
      : setCarouselInfo({ ...carouselInfo, currentIndex: 0 });
  }

  function handleClickPrev() {
    currentIndex > 0
      ? setCarouselInfo({ ...carouselInfo, currentIndex: currentIndex - 1 })
      : setCarouselInfo({ ...carouselInfo, currentIndex: images.length - 1 });
  }

  return (
    <Grid container>
      {carouselInfo.images.length > 0 && renderC ? (
        <Grid
          {...handlers}
          item
          container
          direction="column"
          alignItems="center"
          xs={12}
          sx={{ display: 'block', position: 'relative' }}
        >
          <Image
            src={images[currentIndex].url}
            alt={images[currentIndex].title}
            layout="responsive"
            width={dimensions.w}
            height={dimensions.h}
            loader={myLoader}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '40%',
              width: '100%',
            }}
          >
            <Stack direction="row" justifyContent="space-between" p={2}>
              <IconButton
                aria-label="previous picture"
                onClick={handleClickPrev}
                sx={{ color: 'whitesmoke' }}
              >
                <ArrowBackIosNewIcon
                  sx={{ width: '2.5rem', height: '2.5rem', fill: '#48E7C3' }}
                />
              </IconButton>
              <IconButton
                aria-label="next picture"
                onClick={handleClickNext}
                sx={{ color: 'whitesmoke' }}
              >
                <ArrowForwardIosIcon
                  sx={{ width: '2.5rem', height: '2.5rem', fill: '#48E7C3' }}
                />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      ) : (
        <Grid item container justifyContent="center">
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
}

export default Carousel;
