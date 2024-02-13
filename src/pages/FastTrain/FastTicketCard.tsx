import { Card, CardBody, Text } from '@chakra-ui/react';
import { ReactComponent as ArrowRightSvg } from '../../assets/svg/arrowForward.svg';
import React from 'react';

interface FastTicketCardProps {
  ticketNumber: number;
  onClick: () => void;
}

export default function FastTicketCard({ ticketNumber }: FastTicketCardProps) {
  return (
    <Card w="100%" mb="10px">
      <CardBody
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
      >
        <Text fontSize="16px" as="b">
          {ticketNumber}번째 티켓
        </Text>
        <ArrowRightSvg />
      </CardBody>
    </Card>
  );
}
