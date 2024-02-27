import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainBg from '@/assets/img/TrainOpa40.png';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Flex
      w="100%"
      h="100%"
      pos="relative"
      justify="center"
      align="center"
      p="20px"
      backgroundImage={TrainBg}
      backgroundSize="cover"
      backgroundPosition="center"
      gap="40px"
      flexDir="column"
    >
      <Text
        fontSize="32px"
        as="b"
        fontFamily="12롯데마트행복Medium"
        textAlign="center"
      >
        페이지가 존재하지 않습니다
      </Text>
      <Button
        colorScheme="green"
        size="lg"
        w="100%"
        variant="solid"
        onClick={() => {
          navigate('/matching');
        }}
      >
        메인페이지로 돌아가기
      </Button>
    </Flex>
  );
}
