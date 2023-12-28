import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import firstimg from '../assets/1.png';
import secondimg from '../assets/2.png';
import thirdimg from '../assets/3.png';
import fourthimg from '../assets/4.png';
import fifthimg from '../assets/5.png';
import sixthimg from '../assets/6.png';
import seventhimg from '../assets/7.png';
import eighthimg from '../assets/8.png';
import ninthimg from '../assets/9.png';
import tenthimg from '../assets/10.png';
import eleventh from '../assets/11.png';
import twelth from '../assets/12.png';


const Services = () => {
  const cards = [
    {
      id: 1,
      imgurl: firstimg,
      title: 'Website Design'
    },
    {
      id: 2,
      imgurl: secondimg,
      title: 'Landing Page Design',
    },
    {
      id: 3,
      imgurl: thirdimg,
      title: 'Resume Design',
    },
    {
      id: 4,
      imgurl: fourthimg,
      title: 'Complete Website Development',
    },
    {
      id: 5,
      imgurl: fifthimg,
      title: 'Frontend Website Development',
    },
    {
      id: 6,
      imgurl: sixthimg,
      title: 'Backend Website Development',
    },
    {
      id: 7,
      imgurl: seventhimg,
      title: 'API & Integration',
    },
    {
      id: 8,
      imgurl: eighthimg,
      title: 'WordPress Or Other Website Platform Development',
    },
    {
      id: 9,
      imgurl: ninthimg,
      title: 'Website Customization',
    },
    {
      id: 10,
      imgurl: tenthimg,
      title: 'Speed Optimization',
    },
    {
      id: 11,
      imgurl: eleventh,
      title: 'Bug Fixes',
    },
    {
      id: 12,
      imgurl: twelth,
      title: 'Database Management',
    },
  ];
  return (
    <Box id='Services' padding={10}>
      <Flex alignItems='center' justifyContent='flex-start' gap={2}>
        <Heading fontSize='30px'>Services</Heading>
        <Box w='200px' h='2px' bgColor='#07BB62'></Box>
      </Flex>
      <Grid
        templateColumns={['repeat(1, 95%)', 'repeat(2, 45%)', 'repeat(3, 30%)', 'repeat(4, 23%)']}
        gap={6}
        mt={20}
        margin={'auto'}
      >
        {cards.map((card) => (
          <GridItem key={card.id}>
            <Box
              borderRadius='10px'
              height={['250px', '300px', '350px','400px']}
              width='100%'
              p={5}
              backgroundImage={`url(${card.imgurl})`}
              backgroundSize='cover'
              backgroundRepeat='no-repeat'
              textAlign='center'
            >
              <h1 style={{ fontWeight: 'bold' }}>{card.title}</h1>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
