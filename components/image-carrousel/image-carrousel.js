import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
import { placeholderCarousel } from '../../utils/blurData';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import classes from '../../styles/globals.module.css';

const myLoader = ({ src, width, quality }) => {
  return `https:${src}?q=${quality || 95}`;
};
const ImageCarousel = ({ imges }) => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Carousel
        autoPlay={false}
        sx={{
          width: matchesSM ? '100vw' : '80vw',
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: '#48E7C3',
          },
        }}
        animation="fade"
        duration={700}
        swipe={true}
      >
        {imges.map((img, index) => (
          <Box
            key={`${img.url}`}
            sx={{
              display: 'block',
            }}
          >
            <Image
              src={img.url}
              alt={img.title}
              layout="responsive"
              width={img.width}
              height={img.height}
              loader={myLoader}
              placeholder="blur"
              blurDataURL={placeholderCarousel}
              className={classes.aboutImg}
            />
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default ImageCarousel;
