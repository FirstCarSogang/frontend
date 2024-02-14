import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Textarea,
} from '@chakra-ui/react';

interface TrainReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSummit: () => void;
}

export default function TrainReportModal({
  isOpen,
  onClose,
  onSummit,
}: TrainReportModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent m="0 10px">
        <ModalHeader>사용자 신고</ModalHeader>
        <ModalBody>
          <Textarea
            placeholder="신고사유를 적어주세요"
            cols={5}
            w="100%"
            bg="gray.200"
            focusBorderColor="green.200"
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            취소
          </Button>
          <Button colorScheme="green" onClick={onSummit}>
            제출하기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
