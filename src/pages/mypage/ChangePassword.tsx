import { Box, CloseButton, Flex, Input, Text } from '@chakra-ui/react';
import { ReactComponent as SubmitSvg } from '../../assets/svg/submit.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword() {
  const navigate = useNavigate();
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
        <SubmitSvg onClick={()=>{
          navigate(-1);
        }}/>
      </Flex>
      <Text fontSize="12px" as="b">
        현재 비밀번호
      </Text>
      <Input
        placeholder="현재 비밀번호"
        variant="flushed"
        focusBorderColor="green.400"
        mb="40px"
      />
      <Text fontSize="12px" as="b">
        새 비밀번호
      </Text>
      <Input
        placeholder="새 비밀번호"
        variant="flushed"
        focusBorderColor="green.400"
        mb="20px"
      />
      <Input
        placeholder="새 비밀번호 확인"
        variant="flushed"
        focusBorderColor="green.400"
        mb="20px"
      />
    </Box>
  );
}
