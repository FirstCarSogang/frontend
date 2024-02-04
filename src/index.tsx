import React from 'react';
import CreateDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        fontFamily: 'Pretendard',
        boxSizing: 'border-box',
        overflowY: 'scroll',
      },
    },
  },
  layerStyles: {
    homeWrapper: {
      w: '100%',
      h: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      pos: 'relative',
      backgroundImage: `url('/img/FirstCar.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      p: '10px',
      gap: '20px',
    },
  },
});

const root = CreateDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
);
