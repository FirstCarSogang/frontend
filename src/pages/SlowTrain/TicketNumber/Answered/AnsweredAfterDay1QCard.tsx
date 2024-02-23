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
  Radio,
  RadioGroup,
  Stack,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { type Question, AfterDay1Question } from '@/types/common';
import { ReactComponent as CommentSvg } from '../../../../assets/svg/comment.svg';
import Comment from './Comment';
import { usePostComment } from '@/apis/slowtrain/postComment';
import { useParams } from 'react-router-dom';

const DUMMYLOGINUSER = '송은수';

interface AnsweredDay1QCardProps {
  question: Question;
  opponentQuestion: Question;
}

export default function AnsweredAfterDay1QCard({
  question,
  opponentQuestion,
}: AnsweredDay1QCardProps) {
  const day1Question = question as AfterDay1Question;
  const opponentDay1Question = opponentQuestion as AfterDay1Question;
  const params = useParams().ticketnumber;
  const [showingQuestion, setShowingQuestion] =
    useState<AfterDay1Question>(opponentDay1Question);
  const { isOpen: isComment1Open, onToggle: onToggleComment1 } =
    useDisclosure();
  const { isOpen: isComment2Open, onToggle: onToggleComment2 } =
    useDisclosure();
  const toast = useToast();
  const [comment, setComment] = useState('');
  const { mutate: commentSubmit, isPending } = usePostComment();
  const commentSubmitHandler = () => {
    if (comment === '') {
      toast({
        title: '댓글을 입력해주세요.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    commentSubmit({
      comment: comment,
      ticketNumber: parseInt(params || '0'),
      user: localStorage.getItem('user') || '',
    });
  };

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
        {showingQuestion.question1}
      </Text>
      <Box
        mb="10px"
        bg="gray.200"
        w="100%"
        padding="10px 20px"
        borderRadius="6px"
      >
        <Text fontSize="16px" color="gray.800">
          {showingQuestion.answer1}
        </Text>
      </Box>
      <Box
        display="flex"
        gap="5px"
        alignSelf="flex-end"
        onClick={() => {
          onToggleComment1();
        }}
      >
        <Text fontSize="14px" as="b">
          {showingQuestion.comment1?.length || 0}
        </Text>
        <CommentSvg />
      </Box>
      <Collapse in={isComment1Open}>
        {showingQuestion.comment1?.map((comment, idx) => (
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
      {/* 2번째 질문 */}
      <Text fontSize="16px" as="b">
        {showingQuestion.question2}
      </Text>
      <RadioGroup colorScheme="green" defaultValue={showingQuestion.answer2}>
        <Stack direction="column" spacing="5px" mb="10px">
          <Radio value={showingQuestion.multipleChoiceAnswer1}>
            {showingQuestion.multipleChoiceAnswer1}
          </Radio>
          <Radio value={showingQuestion.multipleChoiceAnswer2}>
            {showingQuestion.multipleChoiceAnswer2}
          </Radio>
          {showingQuestion.multipleChoiceAnswer3 && (
            <Radio value={showingQuestion.multipleChoiceAnswer3}>
              {showingQuestion.multipleChoiceAnswer3}
            </Radio>
          )}
          {showingQuestion.multipleChoiceAnswer4 && (
            <Radio value={showingQuestion.multipleChoiceAnswer4}>
              {showingQuestion.multipleChoiceAnswer4}
            </Radio>
          )}
          {showingQuestion.multipleChoiceAnswer5 && (
            <Radio value={showingQuestion.multipleChoiceAnswer5}>
              {showingQuestion.multipleChoiceAnswer5}
            </Radio>
          )}
        </Stack>
      </RadioGroup>
      <Box
        display="flex"
        gap="5px"
        alignSelf="flex-end"
        onClick={() => {
          onToggleComment2();
        }}
      >
        <Text fontSize="14px" as="b">
          {showingQuestion.comment1?.length || 0}
        </Text>
        <CommentSvg />
      </Box>
      <Collapse in={isComment2Open}>
        {showingQuestion.comment1?.map((comment, idx) => (
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
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <InputRightElement>
            <Button size="sm" onClick={commentSubmitHandler} mr="20px">
              전송
            </Button>
          </InputRightElement>
        </InputGroup>
      </Collapse>
    </CardFooter>
  );
}
