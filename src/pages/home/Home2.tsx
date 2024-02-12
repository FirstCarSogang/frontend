import { Button, Center, Circle, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState, RefObject } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as LeftArrowSvg } from '../../assets/svg/arrowBack.svg';
import { ReactComponent as RightArrowSvg } from '../../assets/svg/arrowForward.svg';

export default function Home22() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const leftArrowClickHandler = () => {
    if (currentPage === 0) {
      return;
    } else {
      ref1.current?.scrollTo({
        left: ref1.current?.scrollLeft - 540,
        behavior: 'smooth',
      });
    }
  };
  const rightArrowClickHandler = () => {
    if (currentPage === 3) {
      return;
    } else {
      ref1.current?.scrollTo({
        left: ref1.current?.scrollLeft + 540,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, clientWidth } = ref1.current || {};
      const currentPageIndex = Math.round(
        (scrollLeft ?? 0) / (clientWidth ?? 1),
      );
      setCurrentPage(currentPageIndex);
    };
    const refCurrent = ref1.current;
    if (refCurrent) {
      refCurrent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref1]);

  return (
    <Flex
      ref={ref1}
      pos="relative"
      w="100%"
      h="100%"
      overflowX="scroll"
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      scrollSnapType="x mandatory"
    >
      <Text
        fontSize="32px"
        as="b"
        pos="fixed"
        top={70}
        zIndex={10}
        left="50%"
        transform="translateX(-50%)"
        fontFamily="12롯데마트행복Medium"
        textAlign="center"
      >
        열차 탑승 안내 수칙
      </Text>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        w="100%"
        h="100%"
        bgColor="#98B4FE"
        flexShrink={0}
        scrollSnapAlign="start"
        gap="20px"
        padding=" 0 30px"
        pos="relative"
      >
        <Center
          pos="absolute"
          right="10px"
          top="50%"
          transform="translateY(-50%)"
          color="gray.600"
          cursor="pointer"
          onClick={rightArrowClickHandler}
        >
          <RightArrowSvg />
        </Center>
        <Text fontSize="20px" as="b">
          사진 3장을 등록하고 열차를 선택해요
        </Text>
        <Text fontSize="16px" mb="80px" textAlign="center">
          1. 사진을 등록해요
          <br />
          사진을 통해 나와 비슷한 사람을 찾아요
          <br />
          2. 열차를 선택해요
          <br />
          - 일반열차: 3일동안 질의응답을 하고 상대방과의 만남을 선택해요
          <br />- 급행열차: 질의응답을 가지지 않고 상대방과의 만남을 선택해요
        </Text>
      </Flex>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        w="100%"
        h="100%"
        bgColor="#B5BBDB"
        flexShrink={0}
        scrollSnapAlign="start"
        gap="20px"
        padding=" 0 30px"
        pos="relative"
      >
        <Center
          pos="absolute"
          left="10px"
          top="50%"
          transform="translateY(-50%)"
          color="gray.600"
          cursor="pointer"
          onClick={leftArrowClickHandler}
        >
          <LeftArrowSvg />
        </Center>
        <Center
          pos="absolute"
          right="10px"
          top="50%"
          transform="translateY(-50%)"
          color="gray.600"
          cursor="pointer"
          onClick={rightArrowClickHandler}
        >
          <RightArrowSvg />
        </Center>
        <Text fontSize="20px" as="b">
          매일 22시에 매칭이 이루어져요.
        </Text>
        <Text fontSize="16px" mb="80px" textAlign="center">
          티켓을 사용해 22시에 랜덤으로 매칭이 이루어져요
        </Text>
      </Flex>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        w="100%"
        h="100%"
        bgColor="#E4CCA0"
        flexShrink={0}
        scrollSnapAlign="start"
        gap="20px"
        padding=" 0 30px"
        pos="relative"
      >
        <Center
          pos="absolute"
          left="10px"
          top="50%"
          transform="translateY(-50%)"
          color="gray.600"
          cursor="pointer"
          onClick={leftArrowClickHandler}
        >
          <LeftArrowSvg />
        </Center>
        <Center
          pos="absolute"
          right="10px"
          top="50%"
          transform="translateY(-50%)"
          color="gray.600"
          cursor="pointer"
          onClick={rightArrowClickHandler}
        >
          <RightArrowSvg />
        </Center>
        <Text fontSize="20px" as="b">
          3일 간 자기소개, 질의응답 시간을 가져요
        </Text>
        <Text fontSize="16px" mb="80px" textAlign="center">
          3일 간의 질의응답 시간이 지나면 수락/거절을 선택해요
          <br />
          수락하면 상대방과의 만남이 이루어져요
          <br />
          3일 간 질의응답을 하면 추가로 티켓 한 장을 발급받아요
        </Text>
      </Flex>
      <Flex
        flexDir="column"
        justify="center"
        align="center"
        w="100%"
        h="100%"
        bgColor="#FED47E"
        flexShrink={0}
        scrollSnapAlign="start"
        gap="20px"
        padding=" 0 30px"
        pos="relative"
      >
        <Center
          pos="absolute"
          left="10px"
          top="50%"
          transform="translateY(-50%)"
          color="gray.600"
          cursor="pointer"
          onClick={leftArrowClickHandler}
        >
          <LeftArrowSvg />
        </Center>

        <Text fontSize="20px" as="b">
          상대방과의 만남을 선택해요
        </Text>
        <Text fontSize="16px" textAlign="center" mb="20px">
          3일의 시간이 지났다면 상대방과의 만남 여부를 선택할 수 있어요.
          <br />
          선택은 되돌릴 수 없다는 점!
          <br />
          신중하게 선택해주세요.
        </Text>
        <Text fontSize="16px" as="b" color="gray.800">
          보다 자세한 이용방법이 궁금하다면?
        </Text>
        <Text
          fontSize="12px"
          color="gray.500"
          mb="40px"
          cursor="pointer"
          onClick={() => {
            navigate('/home/guide');
          }}
        >
          가이드라인 보러가기
        </Text>

        <Button
          colorScheme="green"
          size="lg"
          variant="outline"
          w="80%"
          onClick={() => {
            navigate('/login');
          }}
        >
          시작하기
        </Button>
      </Flex>
      <Flex
        pos="fixed"
        bottom={70}
        zIndex={10}
        left="50%"
        transform="translateX(-50%)"
        gap="10px"
      >
        {[0, 1, 2, 3].map((idx) => {
          if (idx === currentPage) {
            return <Circle bg="gray.800" size="10px" key={idx} />;
          } else {
            return <Circle bg="gray.200" size="10px" key={idx} />;
          }
        })}
      </Flex>
    </Flex>
  );
}
