import { Box, Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import HomeNav from '../../components/HomeNav';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { type FastTicket } from '@/types/common';
import NavFooter from '../../components/NavFooter';
import FastTicketCard from './FastTicketCard';

const DUMMYOPPOTICKETS: FastTicket[] = [
  {
    ticketNumber: 1,
    id: 1,
    isAnswered: false,
  },
  {
    ticketNumber: 1,
    id: 2,
    isAnswered: false,
  },
];

//급행티켓 2일치
const DUMMYTICKETS: FastTicket[] = [
  {
    ticketNumber: 1,
    id: 1,
    isAnswered: true,
    choose: true,
  },
  {
    ticketNumber: 2,
    id: 2,
    isAnswered: false,
  },
];

export default function SlowTrain() {
  const navigate = useNavigate();
  const ticketClickHandler = (ticketNumber: number) => {
    navigate(`./${ticketNumber}`);
  };
  return (
    <Box pos="relative" p="80px 10px" w="100%" h="100%" overflowY="scroll">
      <HomeNav title="열차" button={<></>} />
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        mb="20px"
        p="0 10px"
        defaultIndex={1}
      >
        <TabList>
          <Tab
            mr="5px"
            onClick={() => {
              navigate('/slowtrain');
            }}
          >
            일반
          </Tab>
          <Tab>급행</Tab>
        </TabList>
      </Tabs>
      {DUMMYTICKETS.map((ticket) => (
        <FastTicketCard
          onClick={() => {
            ticketClickHandler(ticket.ticketNumber);
          }}
          key={ticket.ticketNumber}
          ticketNumber={ticket.ticketNumber}
        />
      ))}
      <NavFooter />
    </Box>
  );
}
