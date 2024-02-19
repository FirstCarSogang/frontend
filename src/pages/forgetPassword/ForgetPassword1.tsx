import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { LegacyRef, useRef, useState } from 'react';
import { ReactComponent as Step1Svg } from '../../assets/svg/step1.svg';
import { ReactComponent as MailSvg } from '../../assets/svg/mail.svg';
import { useNavigate } from 'react-router-dom';
import { useAuthEmail } from '../../apis/forgetpassword/authEmail';
import { ReactComponent as ArrowLeftSvg } from '../../assets/svg/arrowBack.svg';

export default function ForgetPassword1() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@sogang\.ac\.kr$/;
    setEmail(e.target.value);
    if (e.target.value.length === 0) {
      setIsError(true);
    } else if (!emailPattern.test(e.target.value)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const { mutate: sendEmail, isPending } = useAuthEmail();
  const submitHandler = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    e?.preventDefault();
    sendEmail(
      { email },
      {
        onSuccess: () => {
          navigate(`/forgetpassword2/?email=${email}`);
        },
        onError: (err) => {
          setIsError(true);
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
      <Step1Svg />
      <MailSvg />
      <Text fontSize="24px" as="b" color="gray.800">
        비밀번호를 잊으셨나요?
      </Text>
      <Text fontSize="14px" color="gray.600">
        가입하신 이메일 주소를 입력해주세요.
      </Text>
      <FormControl w="100%" isInvalid={isError}>
        <Input
          placeholder="세인트 이메일"
          value={email}
          variant="flushed"
          focusBorderColor="green.400"
          onChange={inputChangeHandler}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (ref.current && !isError) {
                submitHandler(e);
              }
            }
          }}
        />
        <FormErrorMessage>세인트 이메일을 입력해주세요</FormErrorMessage>
      </FormControl>
      <Button
        ref={ref}
        type="submit"
        colorScheme="green"
        w="100%"
        onClick={submitHandler}
        isDisabled={isError}
        isLoading={isPending}
      >
        OTP 전송
      </Button>
    </Flex>
  );
}
