import React from 'react';
import Head from 'next/head';
import HomeScreen from '../src/Screen/Home';

const Page = (ComposedPage) => {
    const Screen = (props) => (<ComposedPage {...props} />);
    Screen.getInitialProps = async (ctx) => {
        const pageProps = ComposedPage.getInitialProps ? await ComposedPage.getInitialProps : {};
        return pageProps;
    }
    return Screen;
};

export default Page((props) => {
    return (
        <>
            <Head>
                <title>Blockchain</title>
            </Head>
            <HomeScreen />
        </>
    )
})