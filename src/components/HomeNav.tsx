import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

interface HomeNavProps {
  title: string;
  button: React.ReactNode;
}

export default function HomeNav({ title, button = null }: HomeNavProps) {
  return (
    <Flex
      w="100%"
      h="60px"
      boxShadow="md"
      justify="space-between"
      p="0 20px"
      pos="fixed"
      top={0}
      maxW="540px"
      align="center"
      bg="white"
      zIndex={10}
    >
      <Link to="/">
        <Text fontSize="20px" as="b" color="gray.800">
          {title}
        </Text>
      </Link>
      <Link to="/login">{button}</Link>
    </Flex>
  );
}
