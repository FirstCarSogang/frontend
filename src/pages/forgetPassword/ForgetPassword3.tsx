import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ReactComponent as Step3Svg } from '../../assets/svg/step3.svg';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import { useChangePassword } from '../../apis/forgetpassword/changePassword';
import { ReactComponent as ArrowLeftSvg } from '../../assets/svg/arrowBack.svg';

export default function ForgetPassword3() {
  const navigate = useNavigate();
  const email = useLocation().search.split('=')[1];
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  const passwordCheckHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (password !== e.target.value) {
      setPasswordConfirmError(true);
    } else {
      setPasswordConfirmError(false);
    }
  };
  const { mutate: changePassword, isPending } = useChangePassword();
  const sumbitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password.length < 8) {
      setPasswordError(true);
      return;
    }
    if (password !== passwordConfirm) {
      setPasswordConfirmError(true);
      return;
    }
    changePassword(
      { email, new_password: password, new_confirm_password: passwordConfirm },
      {
        onSuccess: () => {
          navigate('/login');
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
        <FormControl w="100%" isInvalid={passwordError}>
          <Input
            placeholder="비밀번호 (8자리 이상 입력하세요)"
            variant="flushed"
            focusBorderColor="green.400"
            w="100%"
            value={password}
            type="password"
            onChange={passwordChangeHandler}
          />
          <FormErrorMessage>8자리 이상 입력해주세요</FormErrorMessage>
        </FormControl>
        <FormControl w="100%" isInvalid={passwordConfirmError}>
          <Input
            placeholder="비밀번호 확인"
            variant="flushed"
            focusBorderColor="green.400"
            w="100%"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            onBlur={passwordCheckHandler}
          />
          <FormErrorMessage>비밀번호가 일치하지 않습니다</FormErrorMessage>
        </FormControl>
      </Flex>
      <Button
        type="submit"
        colorScheme="green"
        w="100%"
        onClick={sumbitHandler}
      >
        비밀번호 초기화
      </Button>
    </Flex>
  );
}
