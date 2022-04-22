import Image from 'next/image';
import Link from '../link/link';
import classes from '../../styles/globals.module.css';
import Stack from '@mui/material/Stack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { placeholderImg } from '../../utils/blurData';
import { motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const myLoader = ({ src, quality }) => {
  return `https:${src}?q=${quality || 95}`;
};

function MasonryList({ itemData }) {
  const mediumHeight =
    itemData.reduce((first, second) => first + second.height, 0) /
    itemData.length;
  const mediumWidth =
    itemData.reduce((first, second) => first + second.width, 0) /
    itemData.length;

  return (
    <Grid item container spacing={1} mt={5} p={1} mb={5}>
      {itemData.map((item, index) => {
        return (
          <Grid
            item
            component={Link}
            href={`/${item.project}`}
            key={`${item.title}-${index}`}
            sx={{
              display: 'block',
              position: 'relative',
            }}
            xs={6}
          >
            <motion.div
              key={item.url}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  type: 'spring',
                  bounce: 0.25,
                  duration: 2,
                  delay: index * 0.2,
                  ease: 'easeIn',
                },
              }}
              viewport={{ once: true }}
            >
              <Image
                src={item.url}
                alt={item.title}
                layout="responsive"
                width={mediumWidth}
                height={mediumHeight}
                loader={myLoader}
                placeholder="blur"
                blurDataURL={placeholderImg}
                className={classes.gimg}
              />
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                sx={{
                  position: 'absolute',
                  bottom: 10,

                  height: '2rem',
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    background: 'transparent',
                    boxShadow: '2px 3px 3px 1px #48E7C3',
                    width: '10rem',
                    borderRadius: 1,
                  }}
                  alignItems="center"
                  justifyContent="space-around"
                >
                  <Typography
                    variant="h6"
                    fontWeight="bolder"
                    sx={{ color: 'white' }}
                  >
                    {item.title}
                  </Typography>
                  <VisibilityIcon sx={{ fill: 'white' }} />
                </Stack>
              </Grid>
            </motion.div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MasonryList;
