import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as Step1Svg } from '../../assets/svg/step1.svg';
import { ReactComponent as MailSvg } from '../../assets/svg/mail.svg';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword1() {
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
      <Step1Svg />
      <MailSvg />
      <Text fontSize="24px" as="b" color="gray.800">
        비밀번호를 잊으셨나요?
      </Text>
      <Text fontSize="14px" color="gray.600">
        가입하신 이메일 주소를 입력해주세요.
      </Text>
      <Input
        placeholder="세인트 이메일"
        variant="flushed"
        focusBorderColor="green.400"
      />
      <Button
        colorScheme="green"
        w="100%"
        onClick={() => {
          navigate('/forgetpassword2');
        }}
      >
        OTP 전송
      </Button>
    </Flex>
  );
}
