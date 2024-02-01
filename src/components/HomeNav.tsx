import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as TrainSvg } from '../assets/svg/train.svg';
export default function HomeNav() {
  return (
    <Flex
      w="100%"
      h="60px"
      boxShadow="md"
      justify="space-between"
      p="0 20px"
      pos="absolute"
      top={0}
      align="center"
      bg="white"
      zIndex={10}
    >
      <Link to="/">
        <Text fontSize="20px" as="b" color="gray.800">
          첫차 서강
        </Text>
      </Link>
      <Link to="/login">
        <Button
          colorScheme="green"
          size="md"
          rightIcon={<TrainSvg color="white" />}
        >
          시작하기
        </Button>
      </Link>
    </Flex>
  );
}
