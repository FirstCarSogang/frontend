import { Box, Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import HomeNav from '../../components/HomeNav';
import React from 'react';
import TicketCard from './TicketCard';
import { useNavigate } from 'react-router-dom';
import { type Ticket } from 'src/types/common';
import NavFooter from '../../components/NavFooter';

//10일치 질문이 담긴 티켓
const DUMMYTICKETS: Ticket[] = [
  {
    ticketNumber: 1,
    progressingDay: 1,
    DayQuestion: [
      {
        question: '자기소개',
        placeholder: '자기소개를 해주세요',
        answer: '안녕하세요 저는 누굴까요?',
        comment: [
          {
            id: 1,
            content: '1번티켓이에요. 답변이 재미 없어요',
            createdAt: '2023-02-01',
            from: '최환',
          },
          {
            id: 2,
            content: '1번 티켓이에요. 어쩔티비',
            createdAt: '2023-02-01',
            from: '송은수',
          },
        ],
        isAnswered: true,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
    ],
    withWhom: '최환',
    id: 1,
  },
  {
    ticketNumber: 2,
    progressingDay: 2,
    DayQuestion: [
      {
        question: '자기소개',
        placeholder: '자기소개를 해주세요',
        answer: '안녕하세요 저는 누굴까요?',
        comment: [
          {
            id: 1,
            content: '답변이 재미 없어요',
            createdAt: '2023-02-01',
            from: '최환',
          },
          {
            id: 2,
            content: '어쩔티비',
            createdAt: '2023-02-01',
            from: '송은수',
          },
        ],
        isAnswered: true,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        answer1: '햄버거',
        comment1: [
          {
            id: 1,
            content: '햄버거 맛있겠다',
            createdAt: '2023-02-01',
            from: '최환',
          },
        ],
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        answer2: '햄버거',
        comment2: [
          {
            id: 1,
            content: '햄버거 맛있겠다',
            createdAt: '2023-02-01',
            from: '최환',
          },
        ],
        isAnswered: true,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
    ],
    withWhom: '최환',
    id: 2,
  },
  {
    ticketNumber: 3,
    progressingDay: 3,
    DayQuestion: [
      {
        question: '자기소개',
        placeholder: '자기소개를 해주세요',
        answer: '안녕하세요 저는 누굴까요?',
        comment: [
          {
            id: 1,
            content: '답변이 재미 없어요',
            createdAt: '2023-02-01',
            from: '최환',
          },
          {
            id: 2,
            content: '어쩔티비',
            createdAt: '2023-02-01',
            from: '송은수',
          },
        ],
        isAnswered: true,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '우리나라 아시안컵 어땠어?',
        placeholder1: '답변내용을 적어주세요',
        answer1: '우리나라가 우승하는 꿈을 꿧어',
        question2: '좋아하는 축구선수는?',
        multipleChoiceAnswer1: '메시',
        multipleChoiceAnswer2: '호날두',
        multipleChoiceAnswer3: '손흥민',
        multipleChoiceAnswer4: '이강인',
        multipleChoiceAnswer5: '박지성',
        isAnswered: true,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
      {
        question1: '어제 먹은 점심은?',
        placeholder1: '어제 먹은 점심을 적어주세요',
        question2: '어제 먹은 점심은?',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        isAnswered: false,
      },
    ],
    withWhom: '최환',
    id: 2,
  },
];

export default function SlowTrain() {
  const navigate = useNavigate();
  const ticketClickHandler = (ticketNumber: number) => {
    navigate(`./${ticketNumber}`);
  };
  return (
    <Box pos="relative" p="80px 0" w="100%" h="100%" overflowY="scroll">
      <HomeNav title="열차" button={<></>} />
      <Tabs variant="soft-rounded" colorScheme="green" mb="20px" p="0 20px">
        <TabList>
          <Tab mr="5px">일반</Tab>
          <Tab>급행</Tab>
        </TabList>
      </Tabs>
      {DUMMYTICKETS.map((ticket) => (
        <TicketCard
          progressingDay={ticket.progressingDay}
          onClick={() => {
            ticketClickHandler(ticket.ticketNumber);
          }}
          key={ticket.ticketNumber}
          ticketNumber={ticket.ticketNumber}
        />
      ))}
      <NavFooter />
    </Box>
  );
}
