import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useBoolean,
  Box,
  Divider,
  AbsoluteCenter,
} from '@chakra-ui/react';
import { ReactComponent as PwShowSvg } from '../../assets/svg/pwShow.svg';
import { ReactComponent as PwHideSvg } from '../../assets/svg/pwHide.svg';
import React from 'react';
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
