import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { placeholderImg } from '../../utils/blurData';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/context';
import { useRouter } from 'next/router';

const myLoader = ({ src, quality }) => {
  return `https:${src}?q=${quality || 95}`;
};

function IndividualImgList({ itemData }) {
  const { setCarouselInfo } = useAppContext();
  const router = useRouter();
  return (
    <Grid
      container
      component="div"
      justifyContent="center"
      sx={{ width: '90vw' }}
      alignItems="center"
      mt={5}
      mb={5}
    >
      <ImageList
        gap={10}
        sx={{
          width: '100vw',
        }}
        variant="masonry"
        cols={2}
        rows={1}
      >
        {itemData.map((item, i) => {
          const cols = item.isFeatured ? 2 : 1;
          const rows = item.isFeatured ? 2 : 1;

          return (
            <motion.div
              key={`${item.title}-${item.url}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: i * 0.1, ease: 'easeIn' }}
            >
              <ImageListItem
                onClick={() => {
                  setCarouselInfo({ currentIndex: i, images: [...itemData] });
                  router.push('/carousel');
                }}
                sx={{
                  '&:hover': { cursor: 'pointer' },
                }}
                rows={rows}
                cols={cols}
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  loader={myLoader}
                  width={item.width}
                  height={item.height}
                  layout="intrinsic"
                  placeholder="blur"
                  blurDataURL={placeholderImg}
                />
              </ImageListItem>
            </motion.div>
          );
        })}
      </ImageList>
    </Grid>
  );
}

export default IndividualImgList;
