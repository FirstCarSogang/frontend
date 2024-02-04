import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { ReactComponent as PlusSvg } from '../../assets/svg/plus.svg';
import React, { useEffect, useState } from 'react';
import TrainCard from './SelectTrainCard';
import { useFormContext } from 'react-hook-form';

interface Step2Props {
  selectedTrain: string;
  setSelectedTrain: React.Dispatch<React.SetStateAction<'normal' | 'fast'>>;
}

export default function Step2({ selectedTrain, setSelectedTrain }: Step2Props) {
  const {
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext();

  const [img1Preview, setImg1Preview] = useState<string | null>(null);
  const [img2Preview, setImg2Preview] = useState<string | null>(null);
  const [img3Preview, setImg3Preview] = useState<string | null>(null);
  const img1 = watch('img1');
  const img2 = watch('img2');
  const img3 = watch('img3');
  useEffect(() => {
    if (img1 && img1.length > 0) {
      const file1 = img1[0];
      setImg1Preview(URL.createObjectURL(file1));
    }
  }, [img1]);
  useEffect(() => {
    if (img2 && img2.length > 0) {
      const file2 = img2[0];
      setImg2Preview(URL.createObjectURL(file2));
      console.log(img2);
      console.log(URL.createObjectURL(file2));
    }
  }, [img2]);
  useEffect(() => {
    if (img3 && img3.length > 0) {
      const file3 = img3[0];
      setImg3Preview(URL.createObjectURL(file3));
    }
  }, [img3]);
  return (
    <Flex
      flexDir="column"
      w="100%"
      h="100vh"
      p="40px 20px"
      justify="center"
      align="center"
      gap="20px"
      overflowY="scroll"
    >
      <Text fontSize="24px" as="b" color="gray.800" textAlign="center">
        자신을 잘 표현하는 사진
        <br />
        3장을 올려주세요
      </Text>
      <Text fontSize="12px" color="gray.500">
        tip: 선명한 사진일수록 좋아요
      </Text>
      <Flex w="100%" justify="center" align="center" gap="10px">
        <FormControl w="111px" h="111px">
          {img1Preview ? (
            <FormLabel
              htmlFor="img1"
              w="100%"
              h="100%"
              borderRadius="8px"
              backgroundImage={`url('${img1Preview}')`}
              backgroundSize="cover"
            />
          ) : (
            <FormLabel
              htmlFor="img1"
              w="100%"
              h="100%"
              borderRadius="8px"
              cursor="pointer"
              bg="gray.200"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <PlusSvg />
            </FormLabel>
          )}

          <Input
            type="file"
            id="img1"
            hidden
            accept="image/*"
            {...register('img1', {
              required: { value: true, message: '사진을 올려주세요' },
            })}
          />
        </FormControl>
        <FormControl w="111px" h="111px">
          {img2Preview ? (
            <FormLabel
              htmlFor="img2"
              w="100%"
              h="100%"
              borderRadius="8px"
              backgroundImage={`url('${img2Preview}')`} //왜 안되냐..
              backgroundSize="cover"
            />
          ) : (
            <FormLabel
              htmlFor="img2"
              w="100%"
              h="100%"
              borderRadius="8px"
              cursor="pointer"
              bg="gray.200"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <PlusSvg />
            </FormLabel>
          )}
          <Input
            type="file"
            id="img2"
            hidden
            accept="image/*"
            {...register('img2', {
              required: { value: true, message: '사진을 올려주세요' },
            })}
          />
        </FormControl>
        <FormControl w="111px" h="111px">
          {img3Preview ? (
            <FormLabel
              htmlFor="img3"
              w="100%"
              h="100%"
              borderRadius="8px"
              backgroundImage={`url('${img3Preview}')`} //왜 안되냐..
              backgroundSize="cover"
            />
          ) : (
            <FormLabel
              htmlFor="img3"
              w="100%"
              h="100%"
              borderRadius="8px"
              cursor="pointer"
              bg="gray.200"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <PlusSvg />
            </FormLabel>
          )}
          <Input
            type="file"
            id="img3"
            hidden
            accept="image/*"
            {...register('img3', {
              required: { value: true, message: '사진을 올려주세요' },
            })}
          />
        </FormControl>
      </Flex>
      {(errors.img1 || errors.img2 || errors.img3) && (
        <Text fontSize="12px" color="red.500">
          사진을 올려주세요
        </Text>
      )}
      <Text
        fontSize="24px"
        as="b"
        color="gray.800"
        textAlign="center"
        mt="40px"
      >
        탑승하실 열차를 선택해주세요
      </Text>
      <Flex w="100%" justify="center" align="center" gap="20px">
        <Box
          w="100%"
          onClick={() => {
            setSelectedTrain('normal');
          }}
        >
          <TrainCard
            title="일반열차"
            body1="- 3일동안 질문에 답하며 서로를 알아갈 수 있어요"
            body2="- 열차운행이 종료되면 티켓을 획득해요"
            footer={<Button colorScheme="green">일반열차 선택</Button>}
            selected={selectedTrain === 'normal'}
          />
        </Box>
        <Box
          w="100%"
          onClick={() => {
            setSelectedTrain('fast');
          }}
        >
          <TrainCard
            title="급행열차"
            body1="- 바로 상대방과 만남을 선택할 수 있어요"
            body2="- 티켓을 추가로 획득할 수 없어요"
            footer={<Button colorScheme="green">급행열차 선택</Button>}
            selected={selectedTrain === 'fast'}
          />
        </Box>
      </Flex>
      <Text fontSize="12px" color="gray.500">
        마이페이지에서 변경할 수 있어요
      </Text>
      <Button colorScheme="green" size="md" flexShrink={0} type="submit">
        회원가입
      </Button>
    </Flex>
  );
}
