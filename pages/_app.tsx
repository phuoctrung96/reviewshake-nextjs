import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Header from '@/components/main/header/Header';
import { GlobalStyles } from '../styled/global.styles';
import theme from '@/styled/theme.styles';
import Footer from '@/components/main/footer/Footer';
import SeeInAction from '@/components/reusable/see-in-action/SeeInAction';
import '@/styled/fonts.css';
import Script from 'next/script';
import TagManager, { TagManagerArgs } from 'react-gtm-module';

export default function App({ Component, pageProps }: AppProps) {
  const [isCompanyReviewsPage, setIsCompanyReviewsPage] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV === 'production' || process.env.NEXT_PUBLIC_ENV === 'staging') {
      const GTM_ARGS: TagManagerArgs = {
        gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
      };

      TagManager.initialize(GTM_ARGS);
    }
  }, []);

  useEffect(() => {
    if(Object.keys(pageProps).length > 0 && Object.keys(pageProps).some((key) => key ==='isCompanyReviewsPage' && pageProps[key])) {
      setIsCompanyReviewsPage(true);
    } else {
      setIsCompanyReviewsPage(false);
    }
  }, [pageProps]);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header isCompanyReviewsPage={isCompanyReviewsPage} />
        <main>
          <Component {...pageProps} />
        </main>
        <SeeInAction />
        <Footer />

        <div id="review-widget-1" />
        <Script
          src="https://me.reviewshake.com/widget-embed.js"
          id="review-widget-1-script"
          data-id="1"
          data-type="floating"
          data-token="eyJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnQiOiJtZSIsImhvc3QiOiJtZS5yZXZpZXdzaGFrZS5jb20iLCJzdG9yZSI6MSwid2lkZ2V0IjoxLCJpYXQiOjE2NzUxNTY2MjR9.jESSgu6rFIneCQJ4XIIvgNUCzXD8JzZRKIs5YgbQBGg"
        />

        <Script id="headway-config">
          {`var HW_config = {
  selector: ".whats-new",
  account: "Jr0XPx"
};`}
        </Script>
        <Script src="https://cdn.headwayapp.co/widget.js" strategy="lazyOnload" />
      </ThemeProvider>
    </>
  );
}
