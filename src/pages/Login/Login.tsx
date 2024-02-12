import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import HomeNav from '../../components/HomeNav';
import LoginForm from './LoginForm';
import { ReactComponent as TrainSvg } from '../../assets/svg/train.svg';

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
      <HomeNav title="첫차 서강" button={<></>} />
      <LoginForm />
    </Flex>
  );
}
