import { Box, CloseButton, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { type Ticket } from 'src/types/common';
import DayCard from './DayCard';

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
            content: '답변이 재미 없어요',
            createdAt: '2023-02-01',
            from: '최환',
          },
          {
            id: 2,
            content: '어쩔티비',
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
            from: '최환',
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
        answer2: 1,
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
];

export default function TicketNumber() {
  const ticketNumber = useParams().ticketnumber;
  const DUMMYTICKET = DUMMYTICKETS[Number(ticketNumber) - 1];
  const navigate = useNavigate();
  return (
    <Flex
      w="100%"
      h="100%"
      flexDir="column"
      gap="10px"
      align="center"
      pos="relative"
      pt="100px"
      pr="10px"
      pl="10px"
      overflowY="scroll"
    >
      <Flex
        pos="absolute"
        top={0}
        left={0}
        w="100%"
        h="60px"
        p="0 20px"
        gap="10px"
        align="center"
      >
        <CloseButton
          onClick={() => {
            navigate('/train');
          }}
        />
        <Text fontSize="16px" as="b">
          {ticketNumber}번째 티켓
        </Text>
      </Flex>
      {DUMMYTICKET.progressingDay < 4
        ? //progressingDay가 3일차 이하일 때 -> DayCard 3장만 렌더링
          DUMMYTICKET.DayQuestion.map((question, index) => {
            // progressingDay 포함 이전 -> disabled=== false
            // progressingDay 미포함 이후 -> disabled=== true
            if (index + 1 <= 3) {
              if (index + 1 <= DUMMYTICKET.progressingDay) {
                return (
                  <DayCard
                    question={question}
                    day={index + 1}
                    isDisabled={false}
                    key={index}
                    progressingDay={DUMMYTICKET.progressingDay}
                  />
                );
              } else {
                return (
                  <DayCard
                    question={question}
                    day={index + 1}
                    isDisabled={true}
                    key={index}
                    progressingDay={DUMMYTICKET.progressingDay}
                  />
                );
              }
            } else return;
          })
        : //progressingDay가 4일차 이상일 때 -> 날짜 갯수에 맞춰 렌더링
          DUMMYTICKET.DayQuestion.map((question, index) => {
            if (index + 1 <= DUMMYTICKET.progressingDay) {
              return (
                <DayCard
                  question={question}
                  day={index + 1}
                  isDisabled={false}
                  key={index}
                  progressingDay={DUMMYTICKET.progressingDay}
                />
              );
            } else return;
          })}
    </Flex>
  );
}
