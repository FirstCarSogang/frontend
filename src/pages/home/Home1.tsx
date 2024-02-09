import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import HomeNav from '../../components/HomeNav';
import { ReactComponent as TrainSvg } from '../../assets/svg/train.svg';

export default function Home1() {
  return (
    <Flex
      w="100%"
      h="100%"
      pos="relative"
      flexDir="column"
      backgroundImage="/img/Train.JPG"
      backgroundSize="cover"
      backgroundPosition="center"
      justify="space-around"
      align="center"
    >
      <Text fontSize="40px" as="b" fontFamily="WiggleHangeul" mb="40px">
        첫<br />차<br />서<br />강
      </Text>
      <Flex justify="center" align="center" gap={10}>
        <Link to="/home2">
          <Button colorScheme="green" size="lg" variant="outline">
            다음
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
