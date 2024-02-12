import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuideModal({ isOpen, onClose }: GuideModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent borderRadius="10px 10px 0 0">
        <ModalHeader>매칭 가이드</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDir="column" gap="10px">
          <Text fontSize="18px" as="b">
            티켓이란?
          </Text>
          <Text fontSize="14px" color="gray.500">
            티켓을 사용해 열차를 탑승하여 22시에 무작위 찬구 1명과 매칭이 돼요
          </Text>
          <Text fontSize="14px" color="gray.500">
            회원가입 시 3장의 티켓이 주어져요
          </Text>
          <Text fontSize="14px" color="gray.500">
            티켓은 최대 5장까지 보유할 수 있어요
          </Text>
          <Text fontSize="14px" color="gray.500">
            매주 한 장씩 티켓이 추가 발급돼요(월요일 00시 마다)
          </Text>
          <Text fontSize="14px" color="gray.500">
            Day3를 마치고 선택을 마치면 추가로 한 장이 발급돼요
          </Text>
          <Text fontSize="14px" color="gray.500">
            자신이 중도포기 -{'>'} 티켓을 못 돌려받음
            <br />
            상대방이 중도포기 -{'<'} 티켓을 돌려받음
          </Text>
          <Text fontSize="18px" as="b" mt="20px">
            열차 탑승법
          </Text>
          <Text fontSize="14px" color="gray.500">
            티켓사용 토글을 켜 놓으면 22시에 자동으로 매칭돼요
          </Text>
          <Text fontSize="14px" color="gray.500">
            티켓은 하루에 한 개씩만 사용 가능해요
          </Text>
          <Text fontSize="14px" color="gray.500">
            매칭은 랜덤으로 이루어져요
          </Text>
          <Text fontSize="14px" color="gray.500">
            티켓은 소중하니깐 티켓사용 토글은 다음날 자동으로 Off로 변해요
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
