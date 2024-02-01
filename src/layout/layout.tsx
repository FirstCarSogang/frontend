import React, { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import { Box } from '@chakra-ui/react';

export default function Layout(props: PropsWithChildren) {
  return (
    <Box position="fixed" zIndex={0} w="100%" h="100%" bg="gray.50">
      <Box maxW={540} minW={320} h="100%" m="0 auto" bg="white">
        {props.children}
      </Box>
    </Box>
  );
}
