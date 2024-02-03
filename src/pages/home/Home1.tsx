import { Button, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import HomeNav from '../../components/HomeNav';

export default function Home1() {
  return (
    <Flex layerStyle="homeWrapper">
      <HomeNav />
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
