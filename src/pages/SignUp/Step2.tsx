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
  setSelectedTrain: React.Dispatch<React.SetStateAction<'slow' | 'fast'>>;
}

export default function Step2({ selectedTrain, setSelectedTrain }: Step2Props) {
  const {
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext();

  const [photo1Preview, setPhoto1Preview] = useState<string | null>(null);
  const [photo2Preview, setPhoto2Preview] = useState<string | null>(null);
  const [photo3Preview, setPhoto3Preview] = useState<string | null>(null);
  const photo1 = watch('photo1');
  const photo2 = watch('photo2');
  const photo3 = watch('photo3');
  useEffect(() => {
    if (photo1 && photo1.length > 0) {
      const file1 = photo1[0];
      setPhoto1Preview(URL.createObjectURL(file1));
    }
  }, [photo1]);
  useEffect(() => {
    if (photo2 && photo2.length > 0) {
      const file2 = photo2[0];
      setPhoto2Preview(URL.createObjectURL(file2));
      console.log(photo2);
      console.log(URL.createObjectURL(file2));
    }
  }, [photo2]);
  useEffect(() => {
    if (photo3 && photo3.length > 0) {
      const file3 = photo3[0];
      setPhoto3Preview(URL.createObjectURL(file3));
    }
  }, [photo3]);
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
          {photo1Preview ? (
            <FormLabel
              htmlFor="photo1"
              w="100%"
              h="100%"
              borderRadius="8px"
              backgroundImage={`url('${photo1Preview}')`}
              backgroundSize="cover"
            />
          ) : (
            <FormLabel
              htmlFor="photo1"
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
            id="photo1"
            hidden
            accept="image/*"
            {...register('photo1', {
              required: { value: true, message: '사진을 올려주세요' },
            })}
          />
        </FormControl>
        <FormControl w="111px" h="111px">
          {photo2Preview ? (
            <FormLabel
              htmlFor="photo2"
              w="100%"
              h="100%"
              borderRadius="8px"
              backgroundImage={`url('${photo2Preview}')`} //왜 안되냐..
              backgroundSize="cover"
            />
          ) : (
            <FormLabel
              htmlFor="photo2"
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
            id="photo2"
            hidden
            accept="image/*"
            {...register('photo2', {
              required: { value: true, message: '사진을 올려주세요' },
            })}
          />
        </FormControl>
        <FormControl w="111px" h="111px">
          {photo3Preview ? (
            <FormLabel
              htmlFor="photo3"
              w="100%"
              h="100%"
              borderRadius="8px"
              backgroundImage={`url('${photo3Preview}')`} //왜 안되냐..
              backgroundSize="cover"
            />
          ) : (
            <FormLabel
              htmlFor="photo3"
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
            id="photo3"
            hidden
            accept="image/*"
            {...register('photo3', {
              required: { value: true, message: '사진을 올려주세요' },
            })}
          />
        </FormControl>
      </Flex>
      {(errors.photo1 || errors.photo2 || errors.photo3) && (
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
            setSelectedTrain('slow');
          }}
        >
          <TrainCard
            title="일반열차"
            body1="- 3일동안 질문에 답하며 서로를 알아갈 수 있어요"
            body2="- 열차운행이 종료되면 티켓을 획득해요"
            footer={<Button colorScheme="green">일반열차 선택</Button>}
            selected={selectedTrain === 'slow'}
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
