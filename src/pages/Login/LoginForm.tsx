import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useBoolean,
  Box,
  Divider,
  AbsoluteCenter,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ReactComponent as PwShowSvg } from '../../assets/svg/pwShow.svg';
import { ReactComponent as PwHideSvg } from '../../assets/svg/pwHide.svg';
import { LoginUser } from '../../types/common';
import axios from 'axios';
import LoginModal from './LoginModal';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../../apis/auth/auth';

export default function LoginForm() {
  const { mutate, isPending } = useLogin();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<LoginUser>();
  const [isShow, toggle] = useBoolean(false);
  const [isErrorModalOpen, toggleErrorModal] = useBoolean(false);
  const navigate = useNavigate();
  const submitHandler: SubmitHandler<LoginUser> = async (data) => {
    mutate(data, {
      onSuccess: (data) => {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('studentId', data.studentId);
        navigate('/matching');
      },
      onError: (error) => {
        toggleErrorModal.toggle();
        console.log(error);
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
      }}
    >
      <LoginModal isOpen={isErrorModalOpen} toggle={toggleErrorModal.toggle} />
      <Flex grow={1} w="100%" flexDir="column" align="center" gap="20px">
        <Text fontSize="40px" as="b">
          첫차 서강
        </Text>
        <Text fontSize="16px">학번과 비밀번호를 입력해주세요</Text>
        <FormControl isInvalid={!!errors.studentId}>
          <Input
            {...register('studentId', {
              required: { value: true, message: '학번을 입력해주세요' },
            })}
            placeholder="학번"
            type="number"
            w="100%"
            variant="flushed"
            focusBorderColor="green.500"
            p="10px"
          />
          <FormErrorMessage>
            {errors.studentId && errors.studentId?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <InputGroup>
            <Input
              {...register('password', {
                required: { value: true, message: '비밀번호를 입력해주세요' },
                minLength: { value: 8, message: '비밀번호는 8자 이상입니다' },
              })}
              placeholder="비밀번호"
              type={isShow ? 'text' : 'password'}
              w="100%"
              variant="flushed"
              focusBorderColor="green.500"
              p="10px"
            />
            <InputRightElement>
              <Text
                borderRadius="5px"
                size="sm"
                onClick={() => {
                  toggle.toggle();
                }}
                cursor="pointer"
              >
                {isShow ? <PwHideSvg /> : <PwShowSvg />}
              </Text>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password?.message}
          </FormErrorMessage>
        </FormControl>
        <Link to="/forgetpassword1" style={{ alignSelf: 'flex-end' }}>
          <Text fontSize="10px" color="gray.500">
            비밀번호를 잊으셨나요?
          </Text>
        </Link>
      </Flex>

      <Flex w="100%" flexDir="column" justify="center" align="center" gap="30">
        <Button
          type="submit"
          colorScheme="green"
          size="md"
          w="100%"
          isLoading={isPending || isSubmitting}
        >
          로그인
        </Button>
        <Box position="relative" padding="0 10" w="100%">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            또는
          </AbsoluteCenter>
        </Box>
        <Button
          colorScheme="gray"
          size="md"
          w="100%"
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </Button>
      </Flex>
    </form>
  );
}
