import {
  Box,
  CloseButton,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import { ReactComponent as SubmitSvg } from '../../assets/svg/submit.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChangePassword } from '../../apis/mypage/changePassword';

export default function ChangePassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isNewPasswordError, setIsNewPasswordError] = useState(false);
  const { mutate: changePassword, isPending } = useChangePassword();
  const toast = useToast();
  const submitHandler = () => {
    if (newPassword !== newPasswordCheck) {
      setIsNewPasswordError(true);
      return;
    }
    changePassword(
      { new_password: newPassword, password },
      {
        onSuccess: () => {
          toast({
            title: '비밀번호가 변경되었습니다.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          navigate(-1);
        },
        onError: (error) => {
          if (error.message === '현재비밀번호에러') {
            setIsPasswordError(true);
          }
          if (error.message === '이전비밀번호와동일') {
            toast({
              title: '이전비밀번호와 동일합니다',
              status: 'error',
              duration: 3000,
              isClosable: true,
            });
          }
          console.log(error);
        },
      },
    );
  };
  return (
    <Box pos="relative" w="100%" h="100%" p="80px 30px" overflowY="scroll">
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        pos="fixed"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        maxW="540px"
        h="60px"
        p="0 20px"
      >
        <CloseButton
          onClick={() => {
            navigate(-1);
          }}
        />
        <Text fontSize="16px" as="b">
          비밀번호 변경
        </Text>
        <SubmitSvg onClick={submitHandler} />
      </Flex>
      <Text fontSize="12px" as="b">
        현재 비밀번호
      </Text>
      <Input
        placeholder="현재 비밀번호"
        variant="flushed"
        focusBorderColor="green.400"
        mb="40px"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Text fontSize="12px" as="b">
        새 비밀번호
      </Text>
      <Input
        placeholder="새 비밀번호"
        variant="flushed"
        focusBorderColor="green.400"
        mb="20px"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <FormControl isInvalid={isNewPasswordError}>
        <Input
          placeholder="새 비밀번호 확인"
          variant="flushed"
          focusBorderColor="green.400"
          mb="20px"
          value={newPasswordCheck}
          onChange={(e) => setNewPasswordCheck(e.target.value)}
        />
        <FormErrorMessage>비밀번호가 일치하지 않습니다.</FormErrorMessage>
      </FormControl>
    </Box>
  );
}
