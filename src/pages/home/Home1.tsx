import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import HomeNav from '../../components/HomeNav';
import { ReactComponent as TrainSvg } from '../../assets/svg/train.svg';

export default function Home1() {
  return (
    <Flex layerStyle="homeWrapper">
      <HomeNav
        title="첫차 서강"
        button={
          <Button
            colorScheme="green"
            size="md"
            rightIcon={<TrainSvg color="white" />}
          >
            시작하기
          </Button>
        }
      />
      <Text fontSize="40px" as="b">
        첫<br />차<br />서<br />강
      </Text>
      <Flex justify="center" align="center" gap={10}>
        <Link to="/home2">
          <Button colorScheme="green" size="lg">
            다음
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
