import {
  Text,
  Textarea,
  CardFooter,
  Button,
  Box,
  useDisclosure,
  Collapse,
  InputGroup,
  Input,
  InputRightAddon,
  TabList,
  Tab,
  Tabs,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { set } from 'react-hook-form';
import { type Question, Day1Question } from '@/types/common';
import { ReactComponent as CommentSvg } from '../../../../assets/svg/comment.svg';
import Comment from './Comment';

const DUMMYLOGINUSER = '송은수';

interface AnsweredDay1QCardProps {
  question: Question;
  opponentQuestion: Question;
}

export default function AnsweredDay1QCard({
  question,
  opponentQuestion,
}: AnsweredDay1QCardProps) {
  const day1Question = question as Day1Question;
  const opponentDay1Question = opponentQuestion as Day1Question;
  const [showingQuestion, setShowingQuestion] =
    useState<Day1Question>(opponentDay1Question);
  const { isOpen, onToggle } = useDisclosure();
  return (
    <CardFooter p="10px 30px" flex="display" flexDir="column" gap="10px">
      <Tabs variant="soft-rounded" colorScheme="green" size="sm">
        <TabList>
          <Tab
            onClick={() => {
              setShowingQuestion(opponentDay1Question);
            }}
          >
            상대방의 답변
          </Tab>
          <Tab
            onClick={() => {
              setShowingQuestion(day1Question);
            }}
          >
            나의 답변
          </Tab>
        </TabList>
      </Tabs>
      <Text fontSize="16px" as="b">
        {showingQuestion.question}
      </Text>
      <Box
        mb="10px"
        bg="gray.200"
        w="100%"
        padding="10px 20px"
        borderRadius="6px"
      >
        <Text fontSize="16px" color="gray.800">
          {showingQuestion.answer}
        </Text>
      </Box>
      <Box
        display="flex"
        gap="5px"
        alignSelf="flex-end"
        onClick={() => {
          onToggle();
        }}
      >
        <Text fontSize="14px" as="b">
          {showingQuestion.comment?.length || 0}
        </Text>
        <CommentSvg />
      </Box>
      <Collapse in={isOpen}>
        {showingQuestion.comment?.map((comment, idx) => (
          <Comment
            content={comment.content}
            isMe={comment.from === DUMMYLOGINUSER}
            key={idx}
          />
        ))}

        <InputGroup size="sm" w="100%">
          <Input
            placeholder="댓글을 입력하세요..."
            focusBorderColor="blackAlpha.100"
          />
          <InputRightAddon>전송</InputRightAddon>
        </InputGroup>
      </Collapse>
    </CardFooter>
  );
}
