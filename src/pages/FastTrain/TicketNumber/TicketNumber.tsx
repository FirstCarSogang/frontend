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
import { ReactComponent as SirenSvg } from '../../../assets/svg/siren.svg';
import TrainReportModal from '../../../components/TrainReportModal';

export default function TicketNumber() {
  const navigate = useNavigate();
  const ticketNumber = useParams().ticketnumber;
  const { isOpen, onClose, onToggle } = useDisclosure();
  const toast = useToast();
  const reportSubmitHandler = () => {
    onToggle();
    toast({
      title: '신고가 접수되었습니다.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  const acceptHandler = () => {
    navigate('./accepted');
  };
  const rejectHandler = () => {
    navigate('/fasttrain');
    toast({
      title: '거절을 선택하셨습니디. 티켓이 소멸됩니다.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Flex
      w="100%"
      h="100%"
      flexDir="column"
      gap="10px"
      p="60px 20px 20px 20px"
      pos="relative"
    >
      <TrainReportModal
        isOpen={isOpen}
        onClose={onClose}
        onSummit={reportSubmitHandler}
      />
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
        나와 유사도가 가장 높은 <br /> 상대방의 프로필을 확인하고 <br />
        만남을 선택해주세요.
      </Text>
      <Flex alignSelf="center" flexGrow={1} justify="center" align="center">
        <Box
          w="111px"
          h="111px"
          borderRadius="10px"
          backgroundImage={`url('/img/comment.png')`}
          backgroundSize="cover"
          backgroundPosition="center"
        />
      </Flex>
      <Flex alignSelf="flex-end" gap="2px" onClick={onToggle} cursor="pointer">
        <Text fontSize="14px" color="red.500" as="b">
          신고하기
        </Text>
        <SirenSvg style={{ color: 'red' }} />
      </Flex>
      <Button w="100" colorScheme="green" onClick={acceptHandler}>
        수락
      </Button>
      <Button w="100" colorScheme="gray" mt="10px" onClick={rejectHandler}>
        거절
      </Button>
    </Flex>
  );
}
