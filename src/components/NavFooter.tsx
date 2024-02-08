import { Flex, Text } from '@chakra-ui/react';
import { ReactComponent as HomeSvg } from '../assets/svg/home.svg';
import { ReactComponent as TrainSvg } from '../assets/svg/train.svg';
import { ReactComponent as SettingSvg } from '../assets/svg/setting.svg';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavFooter() {
  const location = useLocation().pathname;
  return (
    <Flex
      w="100%"
      pos="fixed"
      bottom={0}
      zIndex={10}
      maxW="540px"
      h="60px"
      boxShadow={'0px -1px 5px 0px rgba(0,0,0,0.1)'}
      borderRadius="20px 20px 0 0"
      justify="space-around"
      align="center"
    >
      <Link to="/matching">
        <Flex
          flexDir="column"
          align="center"
          justify="center"
          cursor="pointer"
          gap="3px"
          color={location === '/matching' ? 'green.400' : 'gray.400'}
        >
          <HomeSvg />
          <Text fontSize="12px" as="b">
            매칭
          </Text>
        </Flex>
      </Link>
      <Link to="/slowtrain">
        <Flex
          flexDir="column"
          align="center"
          justify="center"
          cursor="pointer"
          gap="3px"
          color={
            location === '/slowtrain' || location === '/fasttrain'
              ? 'green.400'
              : 'gray.400'
          }
        >
          <TrainSvg />
          <Text fontSize="12px" as="b">
            열차
          </Text>
        </Flex>
      </Link>
      <Link to="/mypage">
        <Flex
          flexDir="column"
          align="center"
          justify="center"
          cursor="pointer"
          gap="3px"
          color={location === '/mypage' ? 'green.400' : 'gray.400'}
        >
          <HomeSvg />
          <Text fontSize="12px" as="b">
            마이페이지
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
