import React from 'react';
import { Flex } from '@chakra-ui/react';
import HomeNav from '../../components/HomeNav';
import LoginForm from './LoginForm';

export default function Login() {
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
      <HomeNav />
      <LoginForm />
    </Flex>
  );
}
