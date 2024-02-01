import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
        <ModalHeader>로그인 성공</ModalHeader>
        <ModalBody>로그인에 성공했습니다.</ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={toggle}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
