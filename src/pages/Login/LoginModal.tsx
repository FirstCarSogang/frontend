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
      <ModalContent m="0 10px">
        <ModalHeader>로그인 성공</ModalHeader>
        <ModalBody>로그인에 성공했습니다.</ModalBody>
        <ModalFooter>
          <Button colorScheme="green" onClick={toggle}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
