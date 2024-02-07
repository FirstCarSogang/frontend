import {
  Card,
  CardBody,
  CardFooter,
  Collapse,
  Text,
  theme,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactComponent as PlusSvg } from '../../../assets/svg/plus.svg';
import { ReactComponent as MinusSvg } from '../../../assets/svg/minus.svg';
import { type Question } from 'src/types/common';
import React, { useState } from 'react';
import NonAnsweredDay1QCard from './NonAnswered/NonAnsweredDay1QCard';
import NonAnsweredAfterDay1QCard from './NonAnswered/NonAnsweredAfterDay1QCard';
import AnsweredDay1QCard from './Answered/AnsweredDay1QCard';
import AnsweredAfterDay1QCard from './Answered/AnsweredAfterDay1QCard';

interface DayCardProps {
  question: Question;
  opponentQuestion: Question;
  day: number;
  isDisabled: boolean;
  progressingDay: number;
}

export default function DayCard({
  question,
  day,
  isDisabled,
  progressingDay,
  opponentQuestion,
}: DayCardProps) {
  const { isOpen, onToggle } = useDisclosure();
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    if (isDisabled === false) {
      setIsClicked(!isClicked);
      onToggle();
    }
  };
  return (
    <Card
      bg={isDisabled ? 'gray.200' : ''}
      border={
        progressingDay === day ? `1px solid ${theme.colors.green[300]}` : ''
      }
      w="100%"
    >
      <CardBody
        display="flex"
        alignItems="center"
        padding="15px 30px"
        justifyContent="space-between"
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        onClick={clickHandler}
      >
        <Text fontSize="16px" as="b" color={isDisabled ? 'gray.500' : ''}>
          Day&nbsp;{day}
        </Text>
        {isClicked ? (
          <MinusSvg />
        ) : (
          <PlusSvg style={{ color: `${isDisabled ? '#718096' : 'black'}` }} />
        )}
      </CardBody>
      {opponentQuestion.isAnswered && question.isAnswered ? (
        <Collapse in={isOpen}>
          {day === 1 && (
            <AnsweredDay1QCard
              question={question}
              opponentQuestion={opponentQuestion}
            />
          )}
          {day !== 1 && <Text>안녕</Text>}
        </Collapse>
      ) : (
        <Collapse in={isOpen} animateOpacity>
          {day === 1 && <NonAnsweredDay1QCard question={question} />}
          {day !== 1 && <NonAnsweredAfterDay1QCard question={question} />}
        </Collapse>
      )}
    </Card>
  );
}
