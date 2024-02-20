import {
  Button,
  Divider,
  Flex,
  Spinner,
  Switch,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import NavFooter from '../../components/NavFooter';
import HomeNav from '../../components/HomeNav';
import { ReactComponent as ArrowForwardSvg } from '../../assets/svg/arrowForward.svg';
import { ReactComponent as LogOutSvg } from '../../assets/svg/logOut.svg';
import { set } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MypageResponse } from 'src/types/response';
import { useSetting } from '../../apis/mypage/setting';
export default function Mypage() {
  const [isPush, setIsPush] = useState(true);
  const navigate = useNavigate();
  const toast = useToast();
  const user = localStorage.getItem('user');
  // useEffect(() => {
  //   if (!user) {
  //     toast({
  //       title: '로그인 후 이용해주세요.',
  //       status: 'error',
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //     navigate('/login');
  //   }
  // });
  const { data, isPending } = useSetting();
  // if (isPending)
  //   return (
  //     <Flex pos="relative" w="100%" h="100%" justify="center" align="center">
  //       <Spinner />
  //     </Flex>
  //   );
  return (
    <Flex
      pos="relative"
      flexDir="column"
      p="100px 30px"
      w="100%"
      h="100%"
      gap="15px"
    >
      <HomeNav title="마이페이지" button={<></>} />
      <Text fontSize="24px" as="b" color="gray.800" mb="15px">
        {data && data.name}
      </Text>
      <Divider />
      <Flex w="100%" justify="space-between" align="center">
        <Text fontSize="18px" as="b" color="gray.800">
          {data && data.train === 'fast' ? '급행열차' : '일반열차'}
        </Text>
        <Flex align="center" gap="20px">
          <Switch
            size="lg"
            colorScheme="green"
            isChecked={data && data.train === 'slow'}
          />
          <Text fontSize="18px" color="gray.800">
            {data && data.train === 'slow' ? '일반열차' : '급행열차'}
          </Text>
        </Flex>
      </Flex>
      <Divider />
      <Flex w="100%" justify="space-between" align="center">
        <Text fontSize="18px" as="b" color="gray.800">
          학번
        </Text>
        <Text fontSize="18px" color="gray.800">
          2019xxxx
        </Text>
      </Flex>
      <Divider />
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        onClick={() => {
          navigate('/changekakaotalkid');
        }}
        cursor="pointer"
      >
        <Text fontSize="18px" as="b" color="gray.800">
          카카오톡 아이디 변경
        </Text>
        <ArrowForwardSvg />
      </Flex>
      <Divider />
      <Flex
        w="100%"
        justify="space-between"
        align="center"
        onClick={() => {
          navigate('/changepassword');
        }}
        cursor="pointer"
      >
        <Text fontSize="18px" as="b" color="gray.800">
          비밀번호 변경
        </Text>
        <ArrowForwardSvg />
      </Flex>
      <Divider />
      <Flex w="100%" justify="space-between" align="center">
        <Text fontSize="18px" as="b" color="gray.800">
          푸시알림 설정
        </Text>
        <Flex align="center" gap="20px">
          <Switch
            size="lg"
            colorScheme="green"
            isChecked={isPush}
            onChange={() => {
              setIsPush((prev) => !prev);
            }}
          />
          <Text fontSize="18px" color="gray.800">
            {isPush ? 'On' : 'Off'}
          </Text>
        </Flex>
      </Flex>
      <Divider />
      <Flex
        alignSelf="center"
        gap="10px"
        cursor="pointer"
        flexGrow={1}
        onClick={() => {
          navigate('/login');
        }}
      >
        <LogOutSvg style={{ color: '#718096', alignSelf: 'flex-end' }} />
        <Text fontSize="14px" color="gray.500" alignSelf="flex-end">
          로그아웃
        </Text>
      </Flex>
      <NavFooter />
    </Flex>
  );
}
