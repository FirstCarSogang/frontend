import {
  Box,
  CloseButton,
  Flex,
  Spinner,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { type Ticket, Question } from '@/types/common';
import ChooseModal from './ChooseModal';
import DayCard from './DayCard';
import { usePostChooseSlow } from '@/apis/slowtrain/postChooseSlow';

//상대방의 응답
const DUMMYopponentsQuestion: Question[] = [
  {
    question: '자기소개',
    placeholder: '자기소개를 해주세요',
    answer: '저는 R관남은 아닌데.. 아무튼 상대방이에요',
    comment: [
      {
        id: 1,
        content: 'ㅋㅋㅋㅋㅋㅋㅋ 얼탱이 없으시네요',
        createdAt: '2023-02-01',
        from: '송은수',
      },
      {
        id: 2,
        content: '? 반말 ㄴㄴ',
        createdAt: '2023-02-01',
        from: '최환',
      },
    ],
    isAnswered: true,
  },
  {
    question1: '어제 먹은 점심은?',
    placeholder1: '어제 먹은 점심을 적어주세요',
    answer1: '저는 나가서 치킨을 사먹었어요',
    question2: '어제 먹은 점심은?',
    multipleChoiceAnswer1: '햄버거',
    multipleChoiceAnswer2: '치킨',
    multipleChoiceAnswer3: '피자',
    multipleChoiceAnswer4: '짜장면',
    multipleChoiceAnswer5: '짬뽕',
    answer2: '치킨',
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
];

const DUMMYOPPOTICKET: Ticket = {
  ticketNumber: 1,
  progressingDay: 4,
  DayQuestion: DUMMYopponentsQuestion,
  withWhom: '최환',
  choose: false,
  id: 1,
};

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
    id: 2,
  },
  {
    ticketNumber: 3,
    progressingDay: 4,
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
        answer1: '햄버거',
        multipleChoiceAnswer1: '햄버거',
        multipleChoiceAnswer2: '치킨',
        multipleChoiceAnswer3: '피자',
        multipleChoiceAnswer4: '짜장면',
        multipleChoiceAnswer5: '짬뽕',
        answer2: '햄버거',
        isAnswered: true,
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

export default function TicketNumber() {
  const ticketNumber = useParams().ticketnumber;
  const DUMMYTICKET = DUMMYTICKETS[Number(ticketNumber) - 1];
  const navigate = useNavigate();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const toast = useToast();
  const { mutate: choose, isPending } = usePostChooseSlow();
  // if (isPending) {
  //   return (
  //     <Flex pos="relative" w="100%" h="100%" align="center" justify="center">
  //       <Spinner />
  //     </Flex>
  //   );
  // }
  const acceptHandler = () => {
    choose(
      {
        choose: true,
        ticketNumber: DUMMYTICKET.ticketNumber,
        user: localStorage.getItem('user') || '',
      },
      {
        onSuccess: () => {
          onToggle();
        },
      },
    );
  };
  const rejectHandler = () => {
    choose(
      {
        choose: false,
        ticketNumber: DUMMYTICKET.ticketNumber,
        user: localStorage.getItem('user') || '',
      },
      {
        onSuccess: () => {
          navigate('/slowtrain');
          toast({
            title: '거절을 선택하셨습니디. 티켓이 소멸됩니다.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        },
      },
    );
  };
  useEffect(() => {
    if (DUMMYTICKET.progressingDay === 4 && !DUMMYTICKET.choose) {
      onToggle();
    }
  }, []);
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
      <ChooseModal
        isOpen={isOpen}
        onClose={onClose}
        onAccept={acceptHandler}
        onReject={rejectHandler}
      />
      <Flex
        pos="fixed"
        top={0}
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
            navigate('/slowtrain');
          }}
        />
        <Text fontSize="16px" as="b">
          {ticketNumber}번째 티켓
        </Text>
      </Flex>
      {DUMMYTICKET.progressingDay >= 4 &&
        DUMMYTICKET.choose &&
        (DUMMYOPPOTICKET.choose ? (
          <Flex
            bg="gray.300"
            w="100%"
            h="40px"
            p="0 20px"
            align="center"
            justify="space-between"
            borderRadius="5px"
            flexShrink={0}
          >
            <Text fontSize="14px" as="b" color="white">
              상대방의 카카오톡 아이디
            </Text>
            <Text fontSize="12px" as="b" color="white">
              saint1234
            </Text>
          </Flex>
        ) : DUMMYOPPOTICKET.choose === false ? (
          <Flex
            bg="gray.300"
            w="100%"
            h="40px"
            p="0 20px"
            align="center"
            justify="space-between"
            borderRadius="5px"
            flexShrink={0}
          >
            <Text fontSize="14px" as="b" color="white">
              상대방이 거절했습니다.
            </Text>
          </Flex>
        ) : (
          <Flex
            bg="gray.300"
            w="100%"
            h="40px"
            p="0 20px"
            align="center"
            justify="space-between"
            borderRadius="5px"
            flexShrink={0}
          >
            <Text fontSize="14px" as="b" color="white">
              상대방의 응답을 기다리고 있어요...
            </Text>
          </Flex>
        ))}

      {DUMMYTICKET.progressingDay < 4
        ? //progressingDay가 3일차 이하일 때 -> DayCard 3장만 렌더링
          DUMMYTICKET.DayQuestion.map((question, index) => {
            // progressingDay 포함 이전 -> disabled=== false
            // progressingDay 미포함 이후 -> disabled=== true
            if (index + 1 <= 3) {
              if (index + 1 <= DUMMYTICKET.progressingDay) {
                return (
                  <Fragment key={index}>
                    <DayCard
                      question={question}
                      opponentQuestion={DUMMYopponentsQuestion[index]}
                      day={index + 1}
                      isDisabled={false}
                      key={index}
                      progressingDay={DUMMYTICKET.progressingDay}
                    />
                    {DUMMYTICKET.progressingDay === index + 1 && (
                      <Text
                        alignSelf="flex-end"
                        fontSize="12px"
                        as="b"
                        color="gray.600"
                        pos="relative"
                        top="-5px"
                      >
                        {question.isAnswered
                          ? DUMMYopponentsQuestion[index].isAnswered
                            ? '상대방의 답변을 확인해보세요!'
                            : '상대방의 답변을 기다리고 있어요...'
                          : '질문에 응답해주세요!'}
                      </Text>
                    )}
                  </Fragment>
                );
              } else {
                return (
                  <DayCard
                    question={question}
                    opponentQuestion={DUMMYopponentsQuestion[index]}
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
                  opponentQuestion={DUMMYopponentsQuestion[index]}
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
