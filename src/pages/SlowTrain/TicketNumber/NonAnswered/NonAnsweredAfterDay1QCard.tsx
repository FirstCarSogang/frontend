import {
  Button,
  CardFooter,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { type Question, AfterDay1Question } from '@/types/common';
interface AfterDay1QuestionCardProps {
  question: Question;
}

export default function AfterDay1QuestionCard({
  question,
}: AfterDay1QuestionCardProps) {
  const afterDay1Question = question as AfterDay1Question;
  return (
    <CardFooter p="10px 30px" flex="display" flexDir="column" gap="10px">
      <Text fontSize="16px" as="b">
        {afterDay1Question.question1}
      </Text>
      <Textarea
        placeholder={afterDay1Question.placeholder1}
        mb="10px"
        bg="gray.200"
        focusBorderColor="green.200"
      />
      <Text fontSize="16px" as="b">
        {afterDay1Question.question2}
      </Text>
      <RadioGroup colorScheme="green">
        <Stack direction="column" spacing="5px" mb="10px">
          <Radio value={afterDay1Question.multipleChoiceAnswer1}>
            {afterDay1Question.multipleChoiceAnswer1}
          </Radio>
          <Radio value={afterDay1Question.multipleChoiceAnswer2}>
            {afterDay1Question.multipleChoiceAnswer2}
          </Radio>
          {afterDay1Question.multipleChoiceAnswer3 && (
            <Radio value={afterDay1Question.multipleChoiceAnswer3}>
              {afterDay1Question.multipleChoiceAnswer3}
            </Radio>
          )}
          {afterDay1Question.multipleChoiceAnswer4 && (
            <Radio value={afterDay1Question.multipleChoiceAnswer4}>
              {afterDay1Question.multipleChoiceAnswer4}
            </Radio>
          )}
          {afterDay1Question.multipleChoiceAnswer5 && (
            <Radio value={afterDay1Question.multipleChoiceAnswer5}>
              {afterDay1Question.multipleChoiceAnswer5}
            </Radio>
          )}
        </Stack>
      </RadioGroup>
      <Button colorScheme="green" size="sm" mb="10px">
        제출
      </Button>
    </CardFooter>
  );
}
