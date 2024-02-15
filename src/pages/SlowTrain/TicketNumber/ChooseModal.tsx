import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  Button,
  ModalContent,
} from '@chakra-ui/react';
import React from 'react';

interface ChooseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onReject: () => void;
}

export default function ChooseModal({
  isOpen,
  onClose,
  onAccept,
  onReject,
}: ChooseModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>선택의 시간이 왔어요</ModalHeader>
        <ModalBody>
          3일의 시간이 지났어요. <br />
          상대방과의 대화가 재밌었나요? 이제 선택의 시간이에요. <br />
          상대방과의 대화를 이어갈까요?
        </ModalBody>
        <ModalFooter display="flex" w="100%" gap="10px">
          <Button colorScheme="green" onClick={onAccept} w="100%">
            수락
          </Button>
          <Button colorScheme="gray" onClick={onReject} w="100%">
            거절
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
