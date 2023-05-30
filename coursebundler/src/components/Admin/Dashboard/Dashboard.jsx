import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import cursor from '../../../assets/images/cursor.png';
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';

const Databox = ({title, qty, qtyPerentage, profit}) => { 
 return( 
 <Box w={['full', '20%']} boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'} p={'8'} borderRadius={'lg'} >
 <Text children={title} />
 
 <HStack>

<Text children={qty} fontSize={'xl'} fontWeight={'bold'} />

<HStack>
  <Text children={`${qtyPerentage}%`}></Text>
  {
    profit ? <RiArrowUpLine color='green' /> :
  (
    <RiArrowDownLine color='red' />
  )
  }
 </HStack>

 </HStack>

<Text children={'Since last month'} opacity={'0.6'} />

 </Box>
);
};

const Bar = ({title, value, profit}) => (
  <Box py={'4'} px={['0','20']} >
   <Heading children={title} size={'sm'} mb={'2'} />
   
   <HStack w='full' alignItems={'center'} >
    
    <Text children={profit ? "0%" : `-${value}%`} />
    <Progress w={'full'} value={profit ? value : 0} colorScheme='purple' />
    <Text children={`${ value>100 ? value : 100}%`} />
    
    </HStack>
  </Box>
)

const Dashboard = () => {
  return (
    <Grid css={{
      cursor: `url(${cursor}), default` 
    }} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']} >
    
    <Box boxSizing='border-box' py={'16'} px={['4', '0']} >
     <Text children={`Last change on ${String(new Date()).split('G')}`} textAlign={'center'} opacity={'0.5'} />
     <Heading children="Dashboard" ml={['0','16']} mb={'16'} textAlign={['center','left']} />

     <Stack direction={['column', 'row']} minH={'24'} justifyContent={'space-evenly'} >
     <Databox title='Views' qty={123} qtyPerentage={30} profit={true} />
     <Databox title='Users' qty={23} qtyPerentage={78} profit={true} />
     <Databox title='Subscriptions' qty={12} qtyPerentage={20} profit={false} />
     </Stack>

     <Box m={['0','16']} borderRadius={'lg'} p={['0', '16']} mt={['4','16']} boxShadow={'-2px 0 10px rgba(107, 70, 193, 0.5)'} >
      <Heading children="Views Graph" size={'md'} textAlign={['center', 'left']} pt={['8','0']} ml={['0','16']} />

      {/* Line Graph Here */}
      <LineChart />
     </Box>

     <Grid templateColumns={['1fr', '2fr 1fr']} >
      <Box p={'4'} >
      <Heading textAlign={['center','left']} size={'md'} children='Progress Bar' my={'8'} ml={['0','16']} />
       
       {/* Make progress bar */}
       <Box>
        <Bar title='Views' value={30} profit={true} />
        <Bar title='Users' value={78} profit={true} />
        <Bar title='Subscriptions' value={20} profit={false} />
       </Box>

      </Box>
      {/* Remaining 1fr colums in graph */}
      <Box p={['0','16']} boxSizing='border-box'py='4' >
      <Heading children='Users' textAlign={'center'} size={'md'} mb={'4'} />

      {/* DoughnutChart graph here */}
      <DoughnutChart />
      </Box>
     </Grid>
    
    {/*  */}
    </Box>

    <Sidebar />
    </Grid>
  );
};

export default Dashboard;


