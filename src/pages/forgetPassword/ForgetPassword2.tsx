import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as Step2Svg } from '../../assets/svg/step2.svg';
import { ReactComponent as MailSvg } from '../../assets/svg/mail.svg';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword2() {
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
      <Step2Svg />
      <MailSvg />
      <Text fontSize="24px" as="b" color="gray.800">
        OTP 5자를 입력해주세요.
      </Text>
      <Text fontSize="14px" color="gray.600">
        가입하신 이메일 주소로 전송된 <br />
        OTP 5자리를 입력해주세요.
      </Text>
      <Input
        placeholder="OTP"
        variant="flushed"
        focusBorderColor="green.400"
        w="20%"
      />
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
