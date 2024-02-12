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
  onClose: () => void;
}

export default function MatchingModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent m="0 10px">
        <ModalHeader>티켓 도착!</ModalHeader>
        <ModalBody>월요일이 되어 티켓 한 장이 도착했어요</ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={onClose}>
            확인
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
