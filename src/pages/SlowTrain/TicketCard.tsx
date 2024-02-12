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
  useDisclosure,
  useSteps,
} from '@chakra-ui/react';
import React from 'react';
import TrainQuitModal from '../../components/TrainQuitModal';
import TrainReportModal from '../../components/TrainReportModal';

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
  const {
    isOpen: isQuitOpen,
    onClose: onCloseQuit,
    onToggle: onToggleQuit,
  } = useDisclosure();
  const {
    isOpen: isReportOpen,
    onClose: onCloseReport,
    onToggle: onToggleReport,
  } = useDisclosure();
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
      cursor="pointer"
      _hover={{ bg: 'gray.50' }}
      pt="5px"
    >
      <TrainQuitModal isOpen={isQuitOpen} onClose={onCloseQuit} />
      <TrainReportModal isOpen={isReportOpen} onClose={onCloseReport} />
      <Box
        display="flex"
        flexDir="column"
        gap="10px"
        w="100%"
        flexShrink={0}
        scrollSnapAlign="start"
        onClick={onClick}
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
        onClick={onToggleQuit}
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
        onClick={onToggleReport}
      >
        <Text fontSize="14px">신고하기</Text>
      </Center>
    </Box>
  );
}
