import React from 'react';
import { Card, CardBody, Text, theme } from '@chakra-ui/react';

interface TrainCardProps {
  title: string;
  body1: string;
  body2: string;
  footer: React.ReactNode;
  selected: boolean;
}

export default function TrainCard({
  title,
  body1,
  body2,
  footer,
  selected = false,
}: TrainCardProps) {
  return (
    <Card
      h="245px"
      border={selected ? `1px solid ${theme.colors.green[300]}` : ''}
    >
      <CardBody
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        flexShrink={0}
      >
        <Text fontSize="20px" as="b">
          {title}
        </Text>
        <Text fontSize="14px" color="gray.500">
          {body1}
        </Text>
        <Text fontSize="14px" color="gray.500">
          {body2}
        </Text>
        {footer}
      </CardBody>
    </Card>
  );
}
