import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { placeholderImg } from '../../utils/blurData';
import { useState } from 'react';
import ImageCarousel from '../image-carrousel/image-carrousel';
import { motion } from 'framer-motion';

const myLoader = ({ src, quality }) => {
  return `https:${src}?q=${quality || 95}`;
};

function IndividualImgList({ itemData }) {
  const [show, setShow] = useState({ index: 0, showCar: false });

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
      {show.showCar ? (
        <ImageCarousel imges={itemData} />
      ) : (
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
                    setShow({ index: i, showCar: true });
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
      )}
    </Grid>
  );
}

export default IndividualImgList;
