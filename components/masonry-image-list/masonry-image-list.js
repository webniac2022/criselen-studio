import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Link from '../link/link';
import classes from '../../styles/globals.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { placeholderImg } from '../../utils/blurData';
import { motion } from 'framer-motion';

const myLoader = ({ src, quality }) => {
  return `https:${src}?q=${quality || 95}`;
};

function MasonryList({ itemData }) {
  return (
    <Box component={Container} mt={5}>
      <ImageList
        variant="standard"
        rows={3}
        cols={2}
        gap={8}
        sx={{ overflow: 'hidden' }}
      >
        {itemData.map((item, i) => (
          <motion.div
            key={item.url}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: 'spring',
                bounce: 0.25,
                duration: 2,
                delay: i * 0.2,
                ease: 'easeIn',
              },
            }}
            viewport={{ once: true }}
          >
            <ImageListItem
              component={Link}
              href={`/${item.project}`}
              sx={{ display: 'block' }}
            >
              <Image
                src={item.url}
                alt={item.title}
                layout="responsive"
                width={350}
                height={250}
                loader={myLoader}
                placeholder="blur"
                blurDataURL={placeholderImg}
                className={classes.gimg}
              />

              <ImageListItemBar
                sx={{ textAlign: 'center', p: 1, height: '30%' }}
                title={item.title}
                actionIcon={<VisibilityIcon sx={{ fill: 'white' }} />}
              />
            </ImageListItem>
          </motion.div>
        ))}
      </ImageList>
    </Box>
  );
}

export default MasonryList;
