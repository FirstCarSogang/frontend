import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useLocation, useParams } from 'react-router-dom';
import { useReportSlowTicket } from '@/apis/slowtrain/reportSlowTicket';
import { useReportFastTicket } from '@/apis/fasttrain/reportFastTicket';

interface TrainReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticketNumber: number;
  onSubmit: () => void;
}

export default function TrainReportModal({
  isOpen,
  onClose,
  onSubmit,
  ticketNumber,
}: TrainReportModalProps) {
  const [reportReason, setReportReason] = useState('');
  const location = useLocation().pathname;
  const { mutate: report, isPending } =
    location === '/slowtrain' ? useReportSlowTicket() : useReportFastTicket();
  const toast = useToast();

  const submitHandler = () => {
    if (!reportReason)
      return toast({
        title: '신고사유를 입력해주세요.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    report({
      ticketNumber: ticketNumber,
      report: reportReason,
      user: localStorage.getItem('user') || '',
    });
    onSubmit();
  };
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
            value={reportReason}
            onChange={(e) => setReportReason(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            취소
          </Button>
          <Button
            colorScheme="green"
            onClick={submitHandler}
            isLoading={isPending}
          >
            제출하기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
