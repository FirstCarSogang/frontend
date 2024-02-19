import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ReactComponent as Step2Svg } from '../../assets/svg/step2.svg';
import { ReactComponent as MailSvg } from '../../assets/svg/mail.svg';
import { ReactComponent as ArrowLeftSvg } from '../../assets/svg/arrowBack.svg';
import { useNavigate } from 'react-router-dom';
import { useAuthOTP } from '../../apis/forgetpassword/authOTP';

export default function ForgetPassword2() {
  const navigate = useNavigate();
  const [pinInput, setPinInput] = useState('');
  const { mutate: authOTP, isPending } = useAuthOTP();
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    authOTP(
      { otp: pinInput },
      {
        onSuccess: () => {
          navigate('/forgetpassword3');
        },
        onError: (err) => {
          console.log(err);
        },
      },
    );
  };
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
      position="relative"
    >
      <Box
        position="absolute"
        top="20px"
        left="20px"
        onClick={() => navigate('/login')}
        color="gray.700"
      >
        <ArrowLeftSvg />
      </Box>
      <Step2Svg />
      <MailSvg />
      <Text fontSize="24px" as="b" color="gray.800">
        OTP 5자를 입력해주세요.
      </Text>
      <Text fontSize="14px" color="gray.600">
        가입하신 이메일 주소로 전송된 <br />
        OTP 5자리를 입력해주세요.
      </Text>
      <HStack justify="space-between">
        <PinInput
          placeholder=""
          focusBorderColor="green.300"
          onChange={(e) => setPinInput(e)}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Button
        colorScheme="green"
        w="100%"
        onClick={submitHandler}
        type="submit"
        isLoading={isPending}
      >
        비밀번호 초기화
      </Button>
    </Flex>
  );
}
