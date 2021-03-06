import React from 'react';
import App from 'next/app';
import { useDeviceType } from '../helper/useDeviceType';
import { AuthProvider } from '../context/auth/auth.context';
import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import 'typeface-roboto';

export default function ExtendedApp({
    Component,
    pageProps,
    query,
    userAgent,
  }) {
    const deviceType = useDeviceType(userAgent);
    return (
   
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider> 
            <Component {...pageProps} deviceType={deviceType} />
          </SnackbarProvider>
        </ThemeProvider>
      </AuthProvider>
    );
  }
  
  ExtendedApp.getInitialProps = async appContext => {
    const appProps = await App.getInitialProps(appContext);
    const { req, query } = appContext.ctx;
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { ...appProps, userAgent, query };
  };