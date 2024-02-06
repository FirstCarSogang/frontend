import {
  Box,
  Center,
  Divider,
  Step,
  StepDescription,
  StepIndicator,
  StepIndicatorContent,
  Stepper,
  StepSeparator,
  StepTitle,
  Text,
  useSteps,
} from '@chakra-ui/react';
import React from 'react';

interface TrainCardProps {
  progressingDay: number;
  onClick?: () => void;
  ticketNumber: number;
}

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  { title: 'Day 1', description: '자기소개서' },
  { title: 'Day 2', description: '질문' },
  { title: 'Day 3', description: '질문' },
];

export default function TicketCard({
  progressingDay,
  onClick,
  ticketNumber,
}: TrainCardProps) {
  const { activeStep } = useSteps({ index: progressingDay - 1, count: 10 });
  return (
    <Box
      display="flex"
      w="100%"
      scrollSnapType="x mandatory"
      flexWrap="nowrap"
      overflowX="auto"
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      onClick={onClick}
      cursor="pointer"
      _hover={{ bg: 'gray.50' }}
    >
      <Box
        display="flex"
        flexDir="column"
        gap="10px"
        w="100%"
        flexShrink={0}
        scrollSnapAlign="start"
      >
        <Text fontSize="18px" as="b" p="0 20px">
          {ticketNumber}번째 티켓
        </Text>
        <Stepper index={activeStep} colorScheme="green" p="0 20px">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepIndicatorContent />
              </StepIndicator>
              <Box flexShrink={0}>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Divider />
      </Box>
      <Center
        w="93px"
        h="93px"
        bg="red.500"
        flexShrink={0}
        scrollSnapAlign="end"
      >
        <Text fontSize="14px" color="white">
          나가기
        </Text>
      </Center>
      <Center
        w="93px"
        h="93px"
        bg="gray.400"
        color="white"
        flexShrink={0}
        scrollSnapAlign="end"
      >
        <Text fontSize="14px">신고하기</Text>
      </Center>
    </Box>
  );
}
