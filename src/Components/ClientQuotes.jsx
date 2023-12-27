import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Stack, Flex, Heading, Box, Text } from '@chakra-ui/react';

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
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/150',
      quote:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      personName: 'Jane Smith',
    },
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/150',
      quote:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      personName: 'Jane Smith',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: current => setCurrentSlide(current),
    // Add any additional settings or customizations here
  };

  return (
    <Stack spacing={20} minHeight="45rem" bgColor="#E0FAED" padding={'5%'}>
      <Flex alignItems="center" justifyContent="flex-start">
        <Heading fontSize={'30px'}>What My Client Says </Heading>
        <Box w={'200px'} h={'2px'} bgColor={'#07BB62'}></Box>
      </Flex>

      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id}>
            <Box
              borderRadius="10px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              minWidth="150px"
              bgColor={'#ffffff'}
              p={5}
            >
              <Flex justifyContent={'space-between'}>
                <Flex width={'60%'} alignItems={'center'}>
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    style={{ borderRadius: '50%', height:"60%", backgroundColor:"#ff8200" }}
                    
                  />
                </Flex>
                <Stack mt={4} p={5} width={"90%"}>
                  <Text fontSize="lg" fontStyle="italic">
                    <span style={{ color: '#07BB62', fontSize: '30px' }}>
                      "
                    </span>
                    {card.quote}
                    <span style={{ color: '#07BB62', fontSize: '30px' }}>
                      "
                    </span>
                  </Text>
                  <Text mt={2} fontWeight="bold" textAlign="right">
                    - {card.personName}
                  </Text>
                </Stack>
              </Flex>
            </Box>
          </div>
        ))}
      </Slider>
    </Stack>
  );
}

export default ClientQuotes;
