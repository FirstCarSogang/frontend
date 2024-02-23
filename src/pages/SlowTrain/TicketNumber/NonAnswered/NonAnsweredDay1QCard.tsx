import { Text, Textarea, CardFooter, Button, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { type Question, Day1Question } from '@/types/common';

interface Day1QuestionCardProps {
  question: Question;
}

export default function NonAnsweredDay1QCard({
  question,
}: Day1QuestionCardProps) {
  const day1Question = question as Day1Question;
  const [answer, setAnswer] = useState('');
  const toast = useToast();
  const submitHandler = () => {
    if (answer === '') {
      toast({
        title: '답변을 입력해주세요.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    console.log(answer);
  };
  return (
    <CardFooter p="10px 30px" flex="display" flexDir="column" gap="10px">
      <Text fontSize="16px" as="b">
        {day1Question.question}
      </Text>
      <Textarea
        placeholder={day1Question.placeholder}
        mb="10px"
        bg="gray.200"
        focusBorderColor="green.200"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <Button colorScheme="green" size="sm" mb="10px">
        제출
      </Button>
    </CardFooter>
  );
}
