import {
  Box,
  Button,
  CloseButton,
  Flex,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { type FastTicket } from 'src/types/common';
import TrainReportModal from '../../../components/TrainReportModal';

const DUMMYOPPOTICKET: FastTicket = {
  ticketNumber: 1,
  id: 1,
  isAnswered: false,
};

const DUMMYKAKAOID = 'sogang';

export default function Accpeted() {
  const navigate = useNavigate();
  const ticketNumber = useParams().ticketnumber;
  return (
    <Flex
      w="100%"
      h="100%"
      flexDir="column"
      gap="10px"
      p="60px 20px"
      pos="relative"
    >
      <Flex
        pos="fixed"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        maxW="540px"
        w="100%"
        h="60px"
        p="0 20px"
        gap="10px"
        align="center"
        zIndex={10}
        bg="white"
      >
        <CloseButton
          onClick={() => {
            navigate('/fasttrain');
          }}
        />
        <Text fontSize="16px" as="b">
          {ticketNumber}번째 티켓
        </Text>
      </Flex>
      <Text fontSize="22px" as="b">
        수락을 선택했어요.
      </Text>
      <Flex
        alignSelf="center"
        flexGrow={1}
        justify="center"
        align="center"
        flexDir="column"
        gap="60px"
      >
        <Box w="111px" h="111px" bg="gray.100" borderRadius="10px" />
        <Text fontSize="22px">
          {DUMMYOPPOTICKET
            ? DUMMYOPPOTICKET.choose === true
              ? `상대방의 카톡아이디는 ${DUMMYKAKAOID}입니다.`
              : '상대방이 거절을 선택했어요.'
            : '상대방의 응답을 기다리고 있어요...'}
        </Text>
      </Flex>
    </Flex>
  );
}
