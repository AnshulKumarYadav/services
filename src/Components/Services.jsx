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

const Services = () => {
  const cards = [
    {
      id: 1,
      imgurl: firstimg,
      title: 'Website Design',
      description: 'I will design a new website for you',
    },
    {
      id: 2,
      imgurl: secondimg,
      title: 'Website Development',
      description: 'I will develop a new website for you',
    },
    {
      id: 3,
      imgurl: thirdimg,
      title: 'Website Development',
      description: 'I will develop a new website for you',
    },
    {
      id: 4,
      imgurl: fourthimg,
      title: 'Website Development',
      description: 'I will develop a new website for you',
    },
    {
      id: 5,
      imgurl: firstimg,
      title: 'Website Design',
      description: 'I will design a new website for you',
    },
    {
      id: 6,
      imgurl: secondimg,
      title: 'Website Development',
      description: 'I will develop a new website for you',
    },
    {
      id: 7,
      imgurl: thirdimg,
      title: 'Website Development',
      description: 'I will develop a new website for you',
    },
    {
      id: 8,
      imgurl: fourthimg,
      title: 'Website Development',
      description: 'I will develop a new website for you',
    },
  ];
  return (
    <Box padding={10}>
      <Flex alignItems={'center'} justifyContent={'flex-start'} gap={2}>
        <Heading fontSize={'30px'}>Services</Heading>
        <Box w={'200px'} h={'2px'} bgColor={'#07BB62'}></Box>
      </Flex>
      <Grid
        display={'grid'}
        gap={10}
        gridTemplateRows={'repeat(auto,100px)'}
        gridTemplateColumns={'repeat(4,1fr)'}
        mt={20}
      >
        {cards.map((card, index) => {
          return (
            <GridItem key={card.id} borderRadius={'10px'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
              <Stack spacing={2} >
                <img
                  src={card.imgurl}
                  alt={card.title}
                  style={{ borderRadius: '10px 10px 0px 0px' }}
                />
                <Box p={5}>
                  <h1 style={{ fontWeight: 'bold' }}>{card.title}</h1>
                  <p>{card.description}</p>
                  <Flex justifyContent={'flex-end'}>
                    <Button
                      mt={'5'}
                      maxWidth={'auto'}
                      bgColor="#07BB62"
                      color={'white'}
                      variant={'solid'}
                      _hover={{ bgColor: '#04A656' }}
                    >
                      View Details
                    </Button>
                  </Flex>
                </Box>
              </Stack>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Services;
