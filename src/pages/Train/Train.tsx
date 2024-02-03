import { Box, Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import HomeNav from '../../components/HomeNav';
import React from 'react';
import TrainCard from './TrainCard';

export default function Normal() {
  const clickHandler = () => {
    console.log('click');
  };
  return (
    <Box pos="relative" p="80px 0" w="100%" h="100%">
      <HomeNav title="열차" button={<></>} />
      <Tabs variant="soft-rounded" colorScheme="green" mb="20px" p="0 20px">
        <TabList>
          <Tab>일반</Tab>
          <Tab>급행</Tab>
        </TabList>
      </Tabs>
      <TrainCard number={1} onClick={clickHandler} />
    </Box>
  );
}
