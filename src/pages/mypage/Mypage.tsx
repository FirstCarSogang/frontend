import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import NavFooter from '../../components/NavFooter';
import HomeNav from '../../components/HomeNav';

export default function Mypage() {
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
      <HomeNav title="마이페이지" button={<></>} />
      마이페이지
      <NavFooter />
    </Flex>
  );
}
