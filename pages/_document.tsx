import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="fonts/ro-icons-2.1.woff2"
                        as="font"
                        crossOrigin=""/>
                    <link
                        rel="preload"
                        href="fonts/rijksoverheidsanswebtext-regular-webfont.ttf"
                        as="font"
                        crossOrigin=""/>
                    <link
                        rel="preload"
                        href="fonts/rijksoverheidsanswebtext-italic-webfont.ttf"
                        as="font"
                        crossOrigin=""/>
                    <link
                        rel="preload"
                        href="fonts/rijksoverheidsanswebtext-bold-webfont.ttf"
                        as="font"
                        crossOrigin=""/>
                    <link
                        rel="preload"
                        href="fonts/RO-SerifWeb-Italic.woff2"
                        as="font"
                        crossOrigin=""/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.

    ctx.renderPage = () =>
        originalRenderPage({
            // eslint-disable-next-line react/display-name
            enhanceApp: (App: any) => (props) =>
                <App {...props} />
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
        ]
    };
};
