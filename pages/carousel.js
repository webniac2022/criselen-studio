import { useAppContext } from '../context/context';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const myLoader = ({ src, width, quality }) => {
  return `https:${src}?q=${quality || 95}`;
};

function Carousel() {
  const { carouselInfo, setCarouselInfo } = useAppContext();

  function handleClickNext() {
    carouselInfo.currentIndex < carouselInfo.images.length
      ? setCarouselInfo({
          ...carouselInfo,
          currentIndex: carouselInfo.currentIndex + 1,
        })
      : setCarouselInfo({ ...carouselInfo, currentIndex: 0 });
  }

  function handleClickPrev() {
    carouselInfo.currentIndex > 0
      ? setCarouselInfo({
          ...carouselInfo,
          currentIndex: carouselInfo.currentIndex - 1,
        })
      : setCarouselInfo({
          ...carouselInfo,
          currentIndex: carouselInfo.images.length - 1,
        });
  }

  return (
    <Grid container mb="100vh">
      {carouselInfo.images.length > 0 && (
        <Grid item container>
          <Image
            src={carouselInfo.images[carouselInfo.currentIndex].url}
            alt={carouselInfo.images[carouselInfo.currentIndex].title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            loader={myLoader}
          />
          <Stack direction="row">
            <Button onClick={handleClickPrev} sx={{ color: 'whitesmoke' }}>
              PREV
            </Button>
            <Button onClick={handleClickNext} sx={{ color: 'whitesmoke' }}>
              NEXT
            </Button>
          </Stack>
        </Grid>
      )}
    </Grid>
  );
}

export default Carousel;
