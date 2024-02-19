import {
  Flex,
  Text,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useSignUpSendEmail, useSignUpVerifyEmail } from '../../apis/auth/auth';

interface SignUpForm {
  name: string;
  password1: string;
  password2: string;
  studentId: string;
  kakaotalkID: string;
  email: string;
  photo1: string;
  photo2: string;
  photo3: string;
}

interface Step1Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Step1Props) {
  const {
    register,
    setError,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext<SignUpForm>();
  const toast = useToast();
  const [opt, setOpt] = useState<string>('');
  const [isEmailtouched, setisEmailTouched] = useState<boolean>(false);
  const [isValidationtouched, setisValidationTouched] =
    useState<boolean>(false);
  const [isvalidationCorrect, setIsValidationCorrect] =
    useState<boolean>(false);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const { mutate: sendEmail, isPending: isSendEmailPending } =
    useSignUpSendEmail();
  const sendEmailHandler = async () => {
    setIsButtonClicked(true);
    sendEmail(
      { email: watch('email') },
      {
        onSuccess: () => {
          toast({
            title: '인증번호가 전송되었습니다',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        },
        onError: (error) => {
          toast({
            title: '인증번호 전송에 실패했습니다',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        },
      },
    );
  };
  const { mutate: verifyEmail, isPending: isVerifyEmailPending } =
    useSignUpVerifyEmail();
  const verfiyEmailHandler = () => {
    verifyEmail(
      { input_otp: opt },
      {
        onSuccess: () => {
          setIsValidationCorrect(true);
          toast({
            title: '인증에 성공했습니다',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        },
        onError: (error) => {
          toast({
            title: '인증에 실패했습니다',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setIsValidationCorrect(true); //지우기
        },
      },
    );
  };
  const pwCheckHandler = () => {
    if (watch('password1') !== watch('password2')) {
      setError('password2', {
        type: 'manual',
        message: '비밀번호가 일치하지 않습니다.',
      });
    } else {
      clearErrors('password2');
    }
  };
  useEffect(() => {
    if (watch('email')) {
      clearErrors('email');
    }
  }, [watch('email')]);
  return (
    <Flex
      w="100%"
      h="100%"
      flexDir="column"
      justify="center"
      align="center"
      gap="5px"
      p="20px 40px"
      overflowY="scroll"
    >
      <Text fontSize="24px" as="b" alignSelf="flex-start">
        환영해요!
      </Text>
      <Text fontSize="16px" alignSelf="flex-start">
        이름
      </Text>
      <FormControl isInvalid={!!errors.name}>
        <Input
          {...register('name', {
            required: {
              value: true,
              message: '이름을 입력해주세요',
            },
          })}
          type="text"
          placeholder="ex)김서강"
          w="100%"
          p="10px"
          focusBorderColor="green.500"
        />
        <FormErrorMessage>
          {errors.name && errors.name?.message}
        </FormErrorMessage>
      </FormControl>
      <Text fontSize="16px" alignSelf="flex-start">
        학번
      </Text>
      <FormControl isInvalid={!!errors.studentId}>
        <Input
          {...register('studentId', {
            required: {
              value: true,
              message: '학번을 입력해주세요',
            },
          })}
          type="number"
          placeholder="ex)20201234"
          w="100%"
          p="10px"
          focusBorderColor="green.500"
        />
        <FormErrorMessage>
          {errors.studentId && errors.studentId?.message}
        </FormErrorMessage>
      </FormControl>
      <Text fontSize="16px" alignSelf="flex-start">
        비밀번호
      </Text>
      <FormControl isInvalid={!!errors.password1}>
        <Input
          {...register('password1', {
            required: {
              value: true,
              message: '비밀번호를 입력해주세요',
            },
            minLength: {
              value: 8,
              message: '8자리 이상 입력해주세요',
            },
          })}
          type="password"
          placeholder="8자리 이상 입력하세요"
          w="100%"
          p="10px"
          focusBorderColor="green.500"
        />
        <FormErrorMessage>
          {errors.password1 && errors.password1?.message}
        </FormErrorMessage>
      </FormControl>
      <Text fontSize="16px" alignSelf="flex-start">
        비밀번호 확인
      </Text>
      <FormControl isInvalid={!!errors.password2}>
        <Input
          {...register('password2')}
          type="password"
          placeholder="비밀번호 확인"
          w="100%"
          p="10px"
          focusBorderColor="green.500"
          onBlur={pwCheckHandler}
        />
        <FormErrorMessage>
          {errors.password2 && errors.password2?.message}
        </FormErrorMessage>
      </FormControl>
      <Text fontSize="16px" alignSelf="flex-start">
        카카오톡 아이디
      </Text>
      <FormControl isInvalid={!!errors.kakaotalkID}>
        <Input
          {...register('kakaotalkID', {
            required: {
              value: true,
              message: '카카오톡 아이디를 입력해주세요',
            },
          })}
          type="text"
          placeholder="ex)sogang"
          w="100%"
          p="10px"
          focusBorderColor="green.500"
        />
        <FormErrorMessage>
          {errors.kakaotalkID && errors.kakaotalkID?.message}
        </FormErrorMessage>
      </FormControl>
      <Text fontSize="16px" alignSelf="flex-start">
        세인트 이메일
      </Text>
      <FormControl isInvalid={!!errors.email}>
        <Input
          {...register('email', {
            required: {
              value: true,
              message: '세인트 이메일을 입력해주세요',
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@sogang.ac.kr$/,
              message: '세인트 이메일을 입력해주세요',
            },
          })}
          type="email"
          placeholder="ex)sogang.ac.kr"
          w="100%"
          p="10px"
          focusBorderColor="green.500"
          onFocus={() => {
            setisEmailTouched(true);
          }}
        />
        <FormErrorMessage>
          {errors.email && errors.email?.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        colorScheme="green"
        size="sm"
        alignSelf="flex-end"
        onClick={sendEmailHandler}
        flexShrink={0}
        isDisabled={!isEmailtouched || !!errors.email}
      >
        인증번호 전송
      </Button>
      {isButtonClicked && (
        <Input
          type="number"
          placeholder="인증번호 입력"
          w="100%"
          p="10px"
          focusBorderColor="green.500"
          onFocus={() => {
            setisValidationTouched(true);
          }}
          onChange={(e) => {
            setOpt(e.target.value);
          }}
        />
      )}
      {isButtonClicked && (
        <Button
          colorScheme="green"
          size="sm"
          alignSelf="flex-end"
          flexShrink={0}
          onClick={verfiyEmailHandler}
        >
          인증하기
        </Button>
      )}
      <Button
        colorScheme="green"
        size="sm"
        w="100%"
        onClick={onNext}
        type="submit"
        flexShrink={0}
        mt="10px"
        isDisabled={
          Object.keys(errors).length > 0 ||
          !isValidationtouched ||
          !isvalidationCorrect
        }
      >
        다음
      </Button>
    </Flex>
  );
}
