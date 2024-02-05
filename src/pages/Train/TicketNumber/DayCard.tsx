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
import Day1QuestionCard from './Day1QuestionCard';

interface DayCardProps {
  question: Question;
  day: number;
  isDisabled: boolean;
  progressingDay: number;
}

export default function DayCard({
  question,
  day,
  isDisabled,
  progressingDay,
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
      cursor="pointer"
      w="100%"
    >
      <CardBody
        display="flex"
        alignItems="center"
        padding="15px 30px"
        justifyContent="space-between"
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
      <Collapse in={isOpen} animateOpacity>
        {day === 1 && <Day1QuestionCard question={question} />}
        {day !== 1 && <Text fontSize="14px">2이상</Text>}
      </Collapse>
    </Card>
  );
}
