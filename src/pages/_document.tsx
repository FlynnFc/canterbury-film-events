import Document, { Head, Html, Main, NextScript } from 'next/document';

import Navbar from '@/components/Navbar';
import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head></Head>

        <body className="bg-slate-100">
          <Navbar />
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
