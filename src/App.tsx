import React, { Fragment } from 'react';
import { ReactComponent as Arrow } from './assets/arrowLeft.svg';
import { Button } from '@chakra-ui/react';
import { css } from '@emotion/react';

const App = () => (
  <Fragment>
    <Arrow />
    <Button>버튼</Button>
    <h1>첫차 서강</h1>
  </Fragment>
);

export default App;
