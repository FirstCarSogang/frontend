import { Text, Textarea, CardFooter, Button } from '@chakra-ui/react';
import React from 'react';
import { type Question, Day1Question } from 'src/types/common';

interface Day1QuestionCardProps {
  question: Question;
}

export default function Day1QuestionCard({ question }: Day1QuestionCardProps) {
  const day1Question = question as Day1Question;
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
      />
      <Button colorScheme="green" size="sm">
        제출
      </Button>
    </CardFooter>
  );
}
