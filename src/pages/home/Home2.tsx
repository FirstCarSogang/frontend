import {
  Card,
  Divider,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeNav from '../../components/HomeNav';

export default function Home2() {
  return (
    <Flex layerStyle="homeWrapper" overflowY="scroll">
      <HomeNav />
      <Card p={5} w="100%">
        <Text fontSize="18px" as="b" pb={2.5} pl="16px">
          서강 첫차 이용방법
        </Text>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                사진 3장을 등록하고 열차를 선택해요
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text fontSize="14px">
                1. 사진 3장을 등록하면 나의 SGTI를 만들 수 있어요
                <br />
                2. 열차를 선택해요
                <br />
                - 일반열차: 3일동안 질의응답을 하고 상대방과의 만남을 선택해요
                <br />- 급행열차: 질의응답을 가지지 않고 상대방과늬 만남을
                선택해요
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                매일 22시에 매칭이 이루어져요
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text fontSize="14px">
                티켓을 사용해 22시에 랜덤으로 매칭이 이루어져요
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                3일 간 자기소개, 질의응답 시간을 가져요
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text fontSize="14px">
                첫번째 날은 학과, 학번, 나이를 공개하지 않고 질의응답을 해요
                <br />
                두번째, 세번째 날은 객관식, 주관식 질문을 통해 질의응답을 해요
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                상대방과의 만남을 선택해요
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text fontSize="14px">
                3일 간의 질의응답 시간이 지나면 수락/거절을 선택해요
                <br />
                수락하면 상대방과의 만남이 이루어져요
                <br />
                3일 간 질의응답을 하면 추가로 티켓 한 장을 발급받아요
                <br />
              </Text>
              <Text fontSize="10px">급행열차는 해당되지 않습니다.</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>
      <Card p={5} w="100%">
        <Text fontSize="18px" as="b" pb={2.5} pl="16px">
          보다 자세한 이용방법이 궁금하다면!
        </Text>
        <Text fontSize="14px" pl="16px" color="gray.500">
          가이드라인 보러가기
        </Text>
      </Card>
      <Link to="/login">
        <Button colorScheme="green" size="md">
          시작하기
        </Button>
      </Link>
    </Flex>
  );
}
