import {
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function ClientQuotes() {
  const cards = [
    {
      id: 1,
      imageUrl:
        'http://localhost:3000/static/media/myfiverrprofileimage.12ae3031aade153a2316.png',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      personName: 'John Doe',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      quote:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      personName: 'Jane Smith',
    },
    // Add more cards as needed
  ];

  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextCard = (currentCard + 1) % cards.length;
      setCurrentCard(nextCard);
    }, 3000); // Change the interval (in milliseconds) to adjust slide speed

    return () => clearInterval(interval);
  }, [currentCard, cards.length]);

  const navigateTo = index => {
    setCurrentCard(index);
  };

  const nextCard = () => {
    const nextIndex = (currentCard + 1) % cards.length;
    setCurrentCard(nextIndex);
  };

  const prevCard = () => {
    const prevIndex = (currentCard - 1 + cards.length) % cards.length;
    setCurrentCard(prevIndex);
  };
  return (
    <Stack
      id="home"
      spacing={20}
      height={'45rem'}
      bgColor="#E0FAED"
      padding={'5%'}
    >
      <Flex alignItems={'center'} justifyContent={'flex-start'}>
        <Heading fontSize={'30px'}>What My Client Says </Heading>
        <Box w={'200px'} h={'2px'} bgColor={'#07BB62'}></Box>
      </Flex>
      <Flex
        p={5}
        boxShadow="md"
        borderRadius="md"
        bg="white"
        w={'100%'}
        h={'80%'}
        mx="auto"
        textAlign="center"
        position="relative"
        alignItems={'center'}
      >
        <img
          src={cards[currentCard].imageUrl}
          alt="Card"
          style={{ maxWidth: '100%', height: '100%' }}
        />
        <Box mt={4} p={10}>
          <Text fontSize="lg" fontStyle="italic">
            <span style={{color:"#07BB62",fontSize:"30px"}}>"</span>{cards[currentCard].quote}<span style={{color:"#07BB62",fontSize:"30px"}}>"</span>
          </Text>

          <Text mt={2} fontWeight="bold" textAlign={'right'}>
            - {cards[currentCard].personName}
          </Text>
        </Box>
        <Button
          onClick={prevCard}
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          variant="outline"
          size="sm"
          display={currentCard === 0 ? 'none' : 'block'}
        >
          <IoIosArrowBack />
        </Button>
        <Button
          onClick={nextCard}
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          variant="outline"
          size="sm"
          display={currentCard === cards.length - 1 ? 'none' : 'block'}
        >
          <IoIosArrowForward />
        </Button>
      </Flex>
    </Stack>
  );
}

export default ClientQuotes;
