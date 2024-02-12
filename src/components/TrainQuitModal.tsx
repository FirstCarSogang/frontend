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

interface TrainQuitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrainQuitModal({
  isOpen,
  onClose,
}: TrainQuitModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent m="0 10px">
        <ModalHeader>중도하차 하시겠습니까?</ModalHeader>
        <ModalBody>열차에서 내리고 티켓은 소멸됩니다.</ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            취소
          </Button>
          <Button colorScheme="green" onClick={onClose}>
            하차
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
