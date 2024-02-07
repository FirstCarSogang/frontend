import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface CommentProps {
  isMe: boolean;
  content: string;
}

export default function Comment({ isMe, content }: CommentProps) {
  return (
    <Box
      cursor="pointer"
      display="flex"
      flexDir="column"
      justifyContent="center"
      p="10px 20px"
      w="100%"
      bg="gray.200"
      mb="15px"
      borderRadius={isMe ? '10px 10px 0 10px' : '10px 10px 10px 0'}
    >
      {!isMe && (
        <Text fontSize="12px" as="b">
          상대방으로부터
        </Text>
      )}
      <Text
        fontSize="14px"
        color="blackAlpha.500"
        alignSelf={isMe ? 'flex-end' : 'flex-start'}
      >
        {content}
      </Text>
    </Box>
  );
}
