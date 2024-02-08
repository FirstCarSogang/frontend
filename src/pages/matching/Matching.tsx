import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import NavFooter from '../../components/NavFooter';
import HomeNav from '../../components/HomeNav';

export default function Matching() {
  return (
    <Flex
      pos="relative"
      flexDir="column"
      align="center"
      justify="center"
      p="100px 30px"
      w="100%"
      h="100%"
    >
      <HomeNav
        title="매칭"
        button={<Button colorScheme="green">매칭가이드</Button>}
      />
      매칭
      <NavFooter />
    </Flex>
  );
}
