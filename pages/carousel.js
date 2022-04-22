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
import classes from '../styles/globals.module.css';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const myLoader = ({ src, width, quality }) => {
  return `https:${src}?q=${quality || 95}`;
};

function Carousel() {
  const controls = useAnimation();
  const variants = {
    initial: { x: 0 },
    animate: { x: '-100%', transition: { duration: 1, ease: 'easeInOut' } },
    exit: { x: 0 },
  };
  const { carouselInfo, setCarouselInfo } = useAppContext();
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
        <Grid item container>
          <Grid
            {...handlers}
            item
            container
            direction="column"
            alignItems="center"
            xs={12}
            sx={{ display: 'block', position: 'relative' }}
          >
            <AnimatePresence exitBeforeEnter>
              <motion.div variants={variants}>
                <Image
                  src={images[currentIndex].url}
                  alt={images[currentIndex].title}
                  layout="responsive"
                  width={dimensions.w}
                  height={dimensions.h}
                  loader={myLoader}
                />
              </motion.div>
            </AnimatePresence>

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
                    sx={{
                      width: '2.5rem',
                      height: '2.5rem',
                      fill: '#48E7C3',
                    }}
                  />
                </IconButton>
                <IconButton
                  aria-label="next picture"
                  onClick={handleClickNext}
                  sx={{ color: 'whitesmoke' }}
                >
                  <ArrowForwardIosIcon
                    sx={{
                      width: '2.5rem',
                      height: '2.5rem',
                      fill: '#48E7C3',
                    }}
                  />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          <Grid item container spacing={1} p={1}>
            {images.map((img, i) => {
              return (
                <Grid item key={i} xs={3}>
                  <Box
                    sx={{
                      display: 'block',
                      borderRadius: '5px',
                      border:
                        i === currentIndex ? '1.5px solid #48E7C3' : 'none',
                      opacity: i === currentIndex ? 0.85 : 1,
                      '&:hover': {
                        cursor: 'pointer',
                        opacity: 0.7,
                        transition: '0.3s ease',
                      },
                    }}
                    onClick={() => {
                      setCarouselInfo({ ...carouselInfo, currentIndex: i });
                    }}
                  >
                    <Image
                      src={img.url}
                      alt={img.title}
                      layout="responsive"
                      loader={myLoader}
                      width={images.reduce(
                        (add, next) => (add + next.width) / images.length,
                        0
                      )}
                      height={images.reduce(
                        (add, next) => (add + next.height) / images.length,
                        0
                      )}
                      className={classes.carouselImg}
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
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
