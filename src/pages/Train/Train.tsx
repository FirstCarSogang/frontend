import { Box, Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import HomeNav from '../../components/HomeNav';
import React from 'react';
import TrainCard from './TrainCard';

//댓글
interface Comment {
  id: number;
  content: string;
  createdAt: string;
  from: string;
}

//첫날 질문: 자기소개
interface Day1Question {
  question: string;
  placeholder: string;
  answer?: string;
  comment?: Comment[];
}
//첫날 이후 질문: 객관식, 주관식 각각 1개
interface AfterDay1Question {
  question1: string;
  placeholder1: string;
  answer1?: string;
  comment1?: Comment[];
  question2: string;
  multipleChoiceAnswer1: string;
  multipleChoiceAnswer2: string;
  multipleChoiceAnswer3: string;
  multipleChoiceAnswer4: string;
  multipleChoiceAnswer5: string;
  answer2?: number;
  comment2?: Comment[];
}

// 질문타입: 첫날 질문, 첫날 이후 질문
type Question = Day1Question | AfterDay1Question;

interface Ticket {
  number: number; //티켓 번호
  progressingDay: number; //진행중인 날짜
  DayQuestion: Question[]; //날짜별 질문
  isAnswered: boolean[]; //답변 여부
  choose?: boolean; //선택 여부
  withWhom: string; //상대방 이름
  id: number; //티켓 고유번호/id -> 상대방 티켓과 같음
}

// const tickets: Ticket[] = [
//   {
//     number: 1,
//     progressingDay: 1,
//     DayQuestion: [
//       {
//         question: '자기소개를 해주세요',
//         placeholder: '학번, 학과, 나이를 공개하지 않고 작성해주세요',
//       },
//       // {
//       //   question1: ""
//       // },
//     ],
//   },
// ];

export default function Normal() {
  const clickHandler = () => {
    console.log('click');
  };
  return (
    <Box pos="relative" p="80px 0" w="100%" h="100%">
      <HomeNav title="열차" button={<></>} />
      <Tabs variant="soft-rounded" colorScheme="green" mb="20px" p="0 20px">
        <TabList>
          <Tab>일반</Tab>
          <Tab>급행</Tab>
        </TabList>
      </Tabs>
      <TrainCard number={1} onClick={clickHandler} />
    </Box>
  );
}
