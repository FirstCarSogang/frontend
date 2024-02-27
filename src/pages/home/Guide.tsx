import {
  Box,
  Button,
  Flex,
  Img,
  Progress,
  Text,
  theme,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import HomeNav from '../../components/HomeNav';
import { ReactComponent as TrainSvg } from '../../assets/svg/train.svg';
import GuideCard from './GuideCard';
import GuideModal from '../../components/GuideModal';
import { useNavigate } from 'react-router-dom';
import FindFrind from '@/assets/img/FindFriend.png';
import Comment from '@/assets/img/Comment.png';
import Choose from '@/assets/img/Choose.png';
import Introduce from '@/assets/img/Introduce.png';
import Ticket from '@/assets/img/Ticket.png';
import Train from '@/assets/img/Train.png';
import TrainBg from '@/assets/img/TrainOpa40.png';

export default function Guide() {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [progressingPerCent, setProgressingPerCent] = useState(0);
  const { isOpen, onClose, onToggle } = useDisclosure();
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        progressRef.current || {};
      setProgressingPerCent(
        ((scrollTop || 0) / ((scrollHeight || 1) - (clientHeight || 0))) * 100,
      );
    };
    if (progressRef.current) {
      progressRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (progressRef.current) {
        progressRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [progressRef]);
  return (
    <Box
      pos="relative"
      p="80px 10px 0 10px"
      w="100%"
      h="100%"
      backgroundImage={TrainBg}
      backgroundSize="cover"
      backgroundPosition="center"
      overflowY="scroll"
      ref={progressRef}
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <GuideModal isOpen={isOpen} onClose={onClose} />
      <Progress
        value={progressingPerCent}
        colorScheme="green"
        pos="fixed"
        maxW="540px"
        w="100%"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        zIndex={100}
        size="xs"
      />
      <HomeNav
        title="첫차 서강"
        button={
          <Button
            colorScheme="green"
            size="md"
            rightIcon={<TrainSvg color="white" />}
            onClick={() => {
              navigate('/login');
            }}
          >
            시작하기
          </Button>
        }
      />
      <Flex w="100%" gap="10px">
        <Flex w="100%" flexDir="column" gap="10px">
          <GuideCard color={theme.colors.green[300]}>
            <Text fontSize="18px" as="b">
              비슷한 관심사의 학우를 만나요
            </Text>
            <Text fontSize="14px" color="gray.400">
              사진 3장을 올려주시면 비슷한 취미를 가진 친구를 찾아드려요
            </Text>
            <Img src={FindFrind} w="100%" h="fit-content" borderRadius="8px" />
          </GuideCard>
          <GuideCard color={theme.colors.green[500]}>
            <Text fontSize="18px" as="b">
              상대방의 응답에 댓글을 작성할 수 있어요
            </Text>
            <Text fontSize="14px" color="gray.400">
              댓글을 작성하며 궁금한 것들을 이야기 해보아요!
            </Text>
            <Img src={Comment} w="100%" h="fit-content" borderRadius="8px" />
          </GuideCard>
          <GuideCard color={theme.colors.green[100]}>
            <Text fontSize="18px" as="b">
              상대방이 중간에 도망갈 까봐 걱정돼요
            </Text>
            <Text fontSize="14px" color="gray.400">
              걱정하지 마세요!
              <br />
              질문기간 동안 상대방이 응답을 하지 않으면 매칭이 취소되고 티켓을
              돌려드려요!
            </Text>
          </GuideCard>
          <GuideCard color={theme.colors.green[800]}>
            <Img src={Ticket} w="100%" h="fit-content" borderRadius="8px" />
            <Text fontSize="18px" as="b">
              열차는 어떻게 탈 수 있나요?
            </Text>
            <Text fontSize="14px" color="gray.400">
              티켓을 통해서 탑승할 수 있어요
            </Text>
            <Button w="100%" colorScheme="green" onClick={onToggle}>
              티켓이 뭔가요?
            </Button>
          </GuideCard>
          <GuideCard color={theme.colors.green[500]}>
            <Text fontSize="18px" as="b">
              수락/거절을 통해 만남여부를 결정해요
            </Text>
            <Text fontSize="14px" color="gray.400">
              상대가 마음에 들지 않아도 속상해 하지 마세요! 다음 티켓을 통해
              나랑 더 비슷한 학우를 만날 수 있어요
            </Text>
            <Img src={Choose} w="100%" h="fit-content" borderRadius="8px" />
          </GuideCard>
        </Flex>
        <Flex w="100%" flexDir="column" gap="10px">
          <GuideCard color={theme.colors.green[700]}>
            <Text fontSize="18px" as="b">
              다른 학우는 무슨 생각을 할까?
            </Text>
            <Text fontSize="14px" color="gray.400">
              3일동안 상대방과 질의응답을 하며 친해져요
            </Text>
          </GuideCard>
          <GuideCard color={theme.colors.green[100]}>
            <Text fontSize="18px" as="b">
              무슨 질문들이 있나요?
            </Text>
            <Text fontSize="16px" as="b">
              Day 1
            </Text>
            <Text fontSize="14px" color="gray.400">
              익명 자시소개
              <br />
              학과, 학번, 나이를 공개하지 않고 자기소개서를 간단하게 작성해요!
            </Text>
            <Text fontSize="16px" as="b">
              Day 2, 3
            </Text>
            <Text fontSize="14px" color="gray.400">
              랜덤 질문
              <br />
              공통괸 취미와 관련된 질문이 랜덤하게 나와요. 상대방의 질문을 보며
              상대방과 내적 친밀감을 쌓아봐요!
            </Text>
            <Text fontSize="12px" color="gray.400" alignSelf="flex-end">
              급행열차는 해당X
            </Text>
            <Img src={Introduce} w="100%" h="fit-content" borderRadius="8px" />
          </GuideCard>
          <GuideCard color={theme.colors.green[300]}>
            <Text fontSize="18px" as="b">
              열차를 탑승해요
            </Text>
            <Text fontSize="16px" as="b">
              일반열차
            </Text>
            <Text fontSize="14px" color="gray.400">
              3일동안 질의응답을 하고 상대방과 만날 수 있어요. 열차 운행이
              종료되면 티켓을 획득해요
            </Text>
            <Text fontSize="16px" as="b">
              급행열차
            </Text>
            <Text fontSize="14px" color="gray.400">
              질의응답 시간을 가지지 않고 바로 만남을 선택해요
            </Text>
            <Text fontSize="16px" as="b">
              기호에 맞게 원하는 열차를 선택할 수 있어요
            </Text>
            <Text fontSize="12px" color="gray.400" alignSelf="flex-end">
              마이페이지에서 확인 및 변경 가능
            </Text>
            <Img src={Train} w="100%" h="fit-content" borderRadius="8px" />
          </GuideCard>
          <GuideCard color={theme.colors.green[500]}>
            <Text fontSize="18px" as="b">
              끝나고 나서도 질의응답을 하고싶어요
            </Text>
            <Text fontSize="14px" color="gray.400">
              3일 간의 질의응답시간이 지나고 만남이 성사된 이후에도 질의응답을
              계속할 수 있어요
            </Text>
          </GuideCard>
          <GuideCard color={theme.colors.green[500]}>
            <Text fontSize="18px" as="b">
              만남 방식이 궁금해요
            </Text>
            <Text fontSize="14px" color="gray.400">
              선택의 날 서로 수락을 누르면 서로의 카카오톡 아이디를 알 수
              있어요.
            </Text>
          </GuideCard>
        </Flex>
      </Flex>
    </Box>
  );
}
