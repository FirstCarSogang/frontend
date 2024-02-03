import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from '@chakra-ui/react';

interface LoginModalProps {
  isOpen: boolean;
  toggle: () => void;
}

export default function LoginModal({ isOpen, toggle }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={toggle} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>에러 발생</ModalHeader>
        <ModalBody>에러가 발생했습니다. 다시 시도해주세요.</ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={toggle}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
