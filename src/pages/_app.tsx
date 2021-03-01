import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

function MyApp(props: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <props.Component {...props.pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default MyApp;
