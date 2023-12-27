import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react';
import firstimg from '../assets/1.png';
import secondimg from '../assets/2.png';
import thirdimg from '../assets/3.png';
import fourthimg from '../assets/4.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  };

  return (
    <Box bgColor="#E0FAED" padding={'5%'}>
      <Flex alignItems="center" justifyContent="flex-start" gap={2} mb={20}>
        <Heading fontSize="30px">Work</Heading>
        <Box w="200px" h="2px" bgColor="#07BB62"></Box>
      </Flex>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={card.id}>
            <Box
              borderRadius="10px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              minWidth="150px"
              bgColor={"#ffffff"}
            >
              <Flex justifyContent={'space-between'}>
                <Box width={'60%'}>
                  <img
                    src={card.imgurl}
                    alt={card.title}
                    style={{ borderRadius: '10px 0px 0px 10px' }}
                  />
                </Box>
                <Stack p={5} width={'60%'}>
                  <h1 style={{ fontWeight: 'bold' }}>{card.title}</h1>
                  <p>{card.description}</p>
                </Stack>
              </Flex>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Services;
