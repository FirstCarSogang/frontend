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
  AbsoluteCenter
} from '@chakra-ui/react';
import { ReactComponent as PwShowSvg } from '../../assets/svg/pwShow.svg';
import { ReactComponent as PwHideSvg } from '../../assets/svg/pwHide.svg';
import React from 'react';
import HomeNav from '../../components/HomeNav';

export default function Login() {
  const [isShow, toggle] = useBoolean(false);
  return (
    <Flex
      pos="relative"
      flexDir="column"
      align="center"
      justify="center"
      p="100px 30px"
      w="100%"
      h="100%"
    >
      <Flex
        grow={1}
        w="100%"
        flexDir="column"
        align="center"
        gap="20px"
      >
        <HomeNav />
        <Text fontSize="40px" as="b">
          첫차 서강
        </Text>
        <Text fontSize="16px">학번과 비밀번호를 입력해주세요</Text>
        <Input
          placeholder="학번"
          type="number"
          w="100%"
          variant="flushed"
          focusBorderColor="green.500"
          p="10px"
        />
        <InputGroup>
          <Input
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
        <Text fontSize="10px" color="gray.500" alignSelf="flex-end">
          비밀번호를 잊으셨나요?
        </Text>
      </Flex>
      <Flex w="100%" flexDir="column" justify="center" align="center" gap="30">
        <Button colorScheme="green" size="md">
          로그인
        </Button>
        <Box position="relative" padding="0 10" w="100%">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            또는
          </AbsoluteCenter>
        </Box>
        <Button colorScheme="gray" size="md">회원가입</Button>
      </Flex>
    </Flex>
  );
}
