import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';

interface LoginModalProps {
  isOpen: boolean;
  onClick: () => void;
  onClose: () => void;
}

export default function ImgChangeModal({
  isOpen,
  onClose,
  onClick,
}: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent w="50%">
        <ModalBody p="0">
          <Flex
            w="100%"
            h="60px"
            justify="center"
            align="center"
            cursor="pointer"
            onClick={onClick}
          >
            <Text fontSize="16px" as="b">
              사진 변경
            </Text>
          </Flex>
          <Divider />
          <Flex
            w="100%"
            h="60px"
            justify="center"
            align="center"
            onClick={onClose}
            cursor="pointer"
          >
            <Text fontSize="16px" as="b">
              취소
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
