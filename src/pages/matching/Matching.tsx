import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  Switch,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import NavFooter from '../../components/NavFooter';
import HomeNav from '../../components/HomeNav';
import GuideModal from '../../components/GuideModal';
import { useNavigate } from 'react-router-dom';
import ImgChangeModal from './ImgChangeModal';
import { useMatchingPage } from '@/apis/matching/getMatchingPage';
import { useChangePhoto } from '@/apis/matching/changePhoto';
import { useChangeUseTicket } from '@/apis/matching/changeUseTicket';
import { useQueryClient } from '@tanstack/react-query';

export default function Matching() {
  const img1Ref = useRef<HTMLInputElement>(null);
  const img2Ref = useRef<HTMLInputElement>(null);
  const img3Ref = useRef<HTMLInputElement>(null);
  const [hour, setHour] = useState((45 - new Date().getHours()) % 24);
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());
  const navigate = useNavigate();
  const {
    isOpen: isOpenGuide,
    onClose: onCloseGuide,
    onToggle: onToggleGuide,
  } = useDisclosure();
  const {
    isOpen: isOpenImg1,
    onClose: onCloseImg1,
    onToggle: onToggleImg1,
  } = useDisclosure();
  const {
    isOpen: isOpenImg2,
    onClose: onCloseImg2,
    onToggle: onToggleImg2,
  } = useDisclosure();
  const {
    isOpen: isOpenImg3,
    onClose: onCloseImg3,
    onToggle: onToggleImg3,
  } = useDisclosure();
  const { mutate: changePhoto } = useChangePhoto();
  const photoChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    photoNumber: number,
  ) => {
    if (e.target.files) {
      changePhoto({ photo: e.target.files, photoNumber });
    }
    console.log(e.target.files);
  };
  const img1ChangeHandler = () => {
    if (img1Ref.current) {
      img1Ref.current.click();
      onToggleImg1();
    }
  };
  const img2ChangeHandler = () => {
    if (img2Ref.current) {
      img2Ref.current.click();
      onToggleImg2();
    }
  };
  const img3ChangeHandler = () => {
    if (img3Ref.current) {
      img3Ref.current.click();
      onToggleImg3();
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setHour((45 - now.getHours()) % 24);
      setMinute(59 - now.getMinutes());
      setSecond(59 - now.getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('studentId') === null) {
      navigate('/login');
    }
  }, []);

  const { data } = useMatchingPage();

  const { mutate } = useChangeUseTicket();
  const changeUseTicketHandler = () => {
    mutate({ useTicket: !data?.use_ticket || false });
  };
  return (
    <Flex
      pos="relative"
      flexDir="column"
      justify="center"
      align="center"
      p="80px 30px 40px 30px"
      w="100%"
      h="100%"
      overflowY="scroll"
      gap="20px"
    >
      <ImgChangeModal
        isOpen={isOpenImg1}
        onClose={onCloseImg1}
        onClick={img1ChangeHandler}
      />
      <ImgChangeModal
        isOpen={isOpenImg2}
        onClose={onCloseImg2}
        onClick={img2ChangeHandler}
      />
      <ImgChangeModal
        isOpen={isOpenImg3}
        onClose={onCloseImg3}
        onClick={img3ChangeHandler}
      />
      <GuideModal isOpen={isOpenGuide} onClose={onCloseGuide} />
      <HomeNav
        title="매칭"
        button={
          <Button colorScheme="green" onClick={onToggleGuide}>
            매칭가이드
          </Button>
        }
      />
      <Text fontSize="24px" as="b" color="gray.800">
        내가 등록한 사진
      </Text>
      <Flex gap="10px" w="100%" justify="center">
        <Box
          w="100%"
          maxW="111px"
          h="fit-content"
          borderRadius="10px"
          aspectRatio={1 / 1}
          backgroundImage={`"url("${data?.photo1_url}")"`}
          backgroundSize="cover"
          onClick={onToggleImg1}
          cursor="pointer"
        />
        <Box
          w="100%"
          maxW="111px"
          h="fit-content"
          borderRadius="10px"
          aspectRatio={1 / 1}
          backgroundImage={`"url("${data?.photo2_url}")"`}
          backgroundSize="cover"
          onClick={onToggleImg2}
          cursor="pointer"
        />
        <Box
          w="100%"
          maxW="111px"
          h="fit-content"
          borderRadius="10px"
          aspectRatio={1 / 1}
          backgroundImage={`"url("${data?.photo3_url}")"`}
          backgroundSize="cover"
          onClick={onToggleImg3}
          cursor="pointer"
        />
      </Flex>
      <Input
        type="file"
        display="none"
        ref={img1Ref}
        onChange={(e) => {
          photoChangeHandler(e, 1);
        }}
      />
      <Input
        type="file"
        display="none"
        ref={img2Ref}
        onChange={(e) => {
          photoChangeHandler(e, 2);
        }}
      />
      <Input
        type="file"
        display="none"
        ref={img3Ref}
        onChange={(e) => {
          photoChangeHandler(e, 3);
        }}
      />
      <Text fontSize="12px" color="gray.500" mb="40px">
        내 타입은 22시마다 자동으로 갱신됩니다.
      </Text>
      <Text fontSize="18px" color="gray.500">
        {hour}시간 {minute}분 {second}초 후에 매칭이 시작됩니다.
      </Text>
      <Text fontSize="24px" as="b" color="gray.800">
        남은 티켓 갯수: {data?.ticket_count}개
      </Text>
      <Flex gap="40px" align="center" flexWrap="wrap" justify="center">
        <Img src="/img/Ticket.png" w="133px" h="100px" borderRadius="10px" />
        <Flex gap="10px">
          <Switch
            size="lg"
            colorScheme="green"
            isChecked={data?.use_ticket}
            onChange={changeUseTicketHandler}
          />
          <Text fontSize="14px" as="b">
            {data?.use_ticket ? '티켓 사용' : '티켓 미사용'}
          </Text>
        </Flex>
      </Flex>
      <Text
        fontSize="12px"
        color="gray.500"
        mb="40px"
        onClick={onToggleGuide}
        cursor="pointer"
      >
        티켓 사용법/열차 탑승법이 궁금하다면?
      </Text>
      <NavFooter />
    </Flex>
  );
}
