import {
  Box,
  CloseButton,
  Flex,
  Input,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import { ReactComponent as SubmitSvg } from '../../assets/svg/submit.svg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useKakaotalkId } from '../../apis/mypage/getKakaotalkId';
import { useChangeKakaotalkId } from '../../apis/mypage/changeKakaotalkId';

export default function ChangeKakaotalkID() {
  const navigate = useNavigate();
  const { data: kakaotalkId, isPending: isPendingGet } = useKakaotalkId();
  const { mutate, isPending: isPendingPost } = useChangeKakaotalkId();
  const toast = useToast();
  const submitHandler = () => {
    mutate(
      {
        kakaotalkId: 'kakaotalkId',
      },
      {
        onSuccess: () => {
          navigate(-1);
          toast({
            title: '카카오톡아이디가 변경되었습니다.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  // if (isPendingGet || isPendingPost)
  //   return (
  //     <Flex pos="relative" w="100%" h="100%" justify="center" align="center">
  //       <Spinner />
  //     </Flex>
  //   );
  return (
    <Box
      pos="relative"
      w="100%"
      h="100%"
      p="80px 30px"
      overflowY="scroll"
      borderRadius="10px"
    >
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
          카카오톡아이디 변경
        </Text>
        <SubmitSvg onClick={submitHandler} />
      </Flex>
      <Text fontSize="12px" as="b">
        새로운 카카오톡아이디
      </Text>
      <Input
        placeholder="새로운 카카오톡 아이디"
        variant="flushed"
        focusBorderColor="green.400"
        mb="30px"
      />
      <Flex
        bg="gray.300"
        w="100%"
        h="40px"
        p="0 20px"
        align="center"
        justify="space-between"
        borderRadius="5px"
      >
        <Text fontSize="14px" as="b" color="white">
          현재 카카오톡 아이디
        </Text>
        <Text fontSize="12px" as="b" color="white">
          {kakaotalkId && kakaotalkId.kakaotalkId}
        </Text>
      </Flex>
    </Box>
  );
}
