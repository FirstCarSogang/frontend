import { Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';

interface HomeNavProps {
  title: string;
  button: React.ReactNode;
}

export default function HomeNav({ title, button = null }: HomeNavProps) {
  const [whereTo, setWhereTo] = useState('/login');
  const location = useLocation().pathname;

  useEffect(() => {
    switch (location) {
      case '/login':
        setWhereTo('/');
        break;
      case '/matching':
        setWhereTo('/matching');
        break;
      case '/slowtrain':
        setWhereTo('/slowtrain');
        break;
      case '/mypage':
        setWhereTo('/mypage');
        break;
      default:
        setWhereTo('/');
        break;
    }
  }, []);
  return (
    <Flex
      w="100%"
      h="60px"
      boxShadow="md"
      justify="space-between"
      p="0 20px"
      pos="fixed"
      top={0}
      left="50%"
      transform="translateX(-50%)"
      maxW="540px"
      align="center"
      bg="white"
      zIndex={10}
    >
      <Link to={whereTo}>
        <Text fontSize="20px" as="b" color="gray.800">
          {title}
        </Text>
      </Link>
      <Link to="/login">{button}</Link>
    </Flex>
  );
}
