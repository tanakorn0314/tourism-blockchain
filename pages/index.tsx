import React from 'react';
import Head from 'next/head';
import HomeScreen from '../src/Screen/Home';

const Page = (ComposedPage) => {
    const Screen = (props) => (<ComposedPage {...props} />);
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