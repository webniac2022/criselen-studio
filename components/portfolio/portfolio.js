import MasonryList from '../masonry-image-list/masonry-image-list';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Portfolio({ items }) {
  const presentationPics = items.map((item) => ({
    url: item.fields.presentationPic.fields.file.url,
    title: item.fields.picTitle.split(' ')[0],
    width: item.fields.presentationPic.fields.file.details.image.width,
    height: item.fields.presentationPic.fields.file.details.image.height,
    project: item.fields.picTitle,
  }));

  return (
    <Grid item container>
      <Grid item container justifyContent="center">
        <Typography variant="h4" align="center">
          Portofoliu
        </Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <MasonryList itemData={presentationPics} />
      </Grid>
    </Grid>
  );
}

export default Portfolio;
