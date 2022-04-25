import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { placeholderImg } from '../../utils/blurData';
import { motion } from 'framer-motion';
import { useAppContext } from '../../context/context';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import classes from '../../styles/globals.module.css';
import TouchAppIcon from '@mui/icons-material/TouchApp';

const myLoader = ({ src, quality }) => {
  return `https:${src}?q=${quality || 95}`;
};

function IndividualImgList({ itemData }) {
  const { setCarouselInfo } = useAppContext();
  const router = useRouter();

  return (
    <Grid container justifyContent="center">
      <Masonry columns={2} spacing={1}>
        {itemData.map((item, index) => {
          return (
            <motion.div
              key={`${item.title}-${item.url}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.35,
                delay: index * 0.1,
                ease: 'easeIn',
              }}
            >
              <Box
                sx={{
                  display: 'block',
                  position: 'relative',
                  '&:hover': { cursor: 'pointer' },
                }}
                onClick={() => {
                  setCarouselInfo({
                    currentIndex: index,
                    images: [...itemData],
                  });
                  router.push('/carousel');
                }}
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  layout="responsive"
                  width={item.width}
                  height={item.height}
                  loader={myLoader}
                  className={classes.carouselImg}
                  placeholder="blur"
                  blurDataURL={placeholderImg}
                />
              </Box>
            </motion.div>
          );
        })}
      </Masonry>
    </Grid>
  );
}

export default IndividualImgList;
