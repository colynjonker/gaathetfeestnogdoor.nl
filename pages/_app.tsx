import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import Head from "next/head";
import * as React from "react";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    return getLayout(
        <>
            <Head>
                <title>Het feest gaat door!</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
