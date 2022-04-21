import * as contentful from 'contentful';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Header from '../components/header/header';

const StyledParagraph = styled('p')({});

function Termeni({ termeni: { items } }) {
  const {
    content: { content },
  } = items[0].fields;

  const Text = ({ children }) => <StyledParagraph>{children}</StyledParagraph>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_5]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_4]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_6]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_2]: (node, children) => <Text>{children}</Text>,
    },
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };
  return (
    <>
      <Header />
      <Grid container>
        <Grid item container p={4}>
          {content.map((c, i) => {
            return (
              <div key={`${c}-${i}`}>
                {documentToReactComponents(c, options)}
              </div>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const data = await client.getEntries({
    content_type: 'termeniPage',
  });

  return {
    props: { termeni: data },
  };
}

export default Termeni;
