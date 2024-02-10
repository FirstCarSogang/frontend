import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as Step3Svg } from '../../assets/svg/step3.svg';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword3() {
  const navigate = useNavigate();
  return (
    <Flex
      w="100%"
      h="100%"
      overflowY="scroll"
      flexDir="column"
      align="center"
      justify="center"
      p="60px"
      gap="50px"
    >
      <Step3Svg />
      <Text fontSize="24px" as="b" color="gray.800">
        비밀번호 초기화
      </Text>
      <Text fontSize="14px" color="gray.600">
        새로운 비밀번호를 입력해주세요.
      </Text>
      <Flex
        w="100%"
        gap="20px"
        flexDir="column"
        justify="center"
        align="center"
      >
        <Input
          placeholder="비밀번호"
          variant="flushed"
          focusBorderColor="green.400"
          w="100%"
        />
        <Input
          placeholder="비밀번호 확인"
          variant="flushed"
          focusBorderColor="green.400"
          w="100%"
        />
      </Flex>
      <Button
        colorScheme="green"
        w="100%"
        onClick={() => {
          navigate('/forgetpassword3');
        }}
      >
        비밀번호 초기화
      </Button>
    </Flex>
  );
}
