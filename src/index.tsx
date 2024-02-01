import React from 'react';
import CreateDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';

const globalStyles = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  * {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
    box-sizing: border-box;
  }
`;

const root = CreateDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <Global styles={globalStyles} />
      <App />
    </ChakraProvider>
  </BrowserRouter>,
);
//prettier, eslint
//react-router-dom 설치
//svg웹팩, d.ts파일 설치
//차크라, emotion 설치
