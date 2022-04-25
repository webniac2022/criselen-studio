import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../lib/create-emotion-cache';
import Head from 'next/head';
import Footer from '../components/footer/footer';
import { AppWrapper } from '../context/context';
import ThemeWrapper from '../components/theme-wrapper/theme-wrapper';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Header from '../components/header/header';
import CookieConsentComponent from '../components/cookie-consent/cookie-consent';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    router,
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>CRISELEN STUDIO - DESIGN INTERIOR</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppWrapper>
        <ParallaxProvider>
          <ThemeWrapper>
            <CssBaseline />
            <Header />
            <CookieConsentComponent />
            <motion.main
              initial={{ opacity: 0, z: -200 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{
                duration: 1,
                ease: 'easeIn',
                bounce: 100,
                damping: 20,
              }}
            >
              <Component {...pageProps} />
            </motion.main>

            <Footer />
          </ThemeWrapper>
        </ParallaxProvider>
      </AppWrapper>
    </CacheProvider>
  );
}

export default MyApp;
