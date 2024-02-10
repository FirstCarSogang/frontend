import { Box, Button, Flex, Img, Switch, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import NavFooter from '../../components/NavFooter';
import HomeNav from '../../components/HomeNav';

export default function Matching() {
  const [hour, setHour] = useState(21 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());
  const [usingTicket, setUsingTicket] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(21 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Flex
      pos="relative"
      flexDir="column"
      align="center"
      justify="center"
      p="80px 30px"
      w="100%"
      h="100%"
      overflowY="scroll"
      gap="20px"
    >
      <HomeNav
        title="매칭"
        button={<Button colorScheme="green">매칭가이드</Button>}
      />
      <Text fontSize="24px" as="b" color="gray.800">
        내가 등록한 사진
      </Text>
      <Flex gap="10px">
        <Box w="111px" h="111px" bg="gray.100" borderRadius="10px" />
        <Box w="111px" h="111px" bg="gray.100" borderRadius="10px" />
        <Box w="111px" h="111px" bg="gray.100" borderRadius="10px" />
      </Flex>
      <Button colorScheme="green" flexShrink={0}>
        사진 변경하기
      </Button>
      <Text fontSize="12px" color="gray.500" mb="40px">
        내 타입은 22시마다 자동으로 갱신됩니다.
      </Text>
      <Text fontSize="18px" color="gray.500">
        {hour}시간 {minute}분 {second}초 후에 매칭이 시작됩니다.
      </Text>
      <Text fontSize="24px" as="b" color="gray.800">
        남은 티켓 갯수: 3개
      </Text>
      <Flex gap="20px" align="center">
        <Img src="/img/Ticket.png" w="133px" h="100px" borderRadius="10px" />
        <Switch
          size="lg"
          colorScheme="green"
          isChecked={usingTicket}
          onChange={() => setUsingTicket((prev) => !prev)}
          ml="40px"
        />
        <Text fontSize="14px" as="b">
          {usingTicket ? '티켓 사용' : '티켓 미사용'}
        </Text>
      </Flex>
      <Text fontSize="12px" color="gray.500" mb="40px">
        티켓 사용법/열차 탑승법이 궁금하다면?
      </Text>
      <NavFooter />
    </Flex>
  );
}
