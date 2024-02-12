import { Flex, theme } from '@chakra-ui/react';
import React from 'react';

interface GuideCardProps {
  children: React.ReactNode;
  color: string;
}

export default function GuideCard({ children, color }: GuideCardProps) {
  return (
    <Flex
      w="100%"
      bg="white"
      flexDir="column"
      gap="10px"
      p="40px 20px"
      borderRadius="8px"
      border={`1px solid ${color}`}
    >
      {children}
    </Flex>
  );
}
