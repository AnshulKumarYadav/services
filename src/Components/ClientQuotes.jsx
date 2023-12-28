import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Stack,
  Flex,
  Heading,
  Box,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

function ClientQuotes() {
  const cards = [
    {
      id: 1,
      imageUrl:
        'http://localhost:3000/static/media/myfiverrprofileimage.12ae3031aade153a2316.png',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      personName: 'John Doe',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      quote:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      personName: 'Jane Smith',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/150',
      quote:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      personName: 'Jane Smith',
    },
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/150',
      quote:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      personName: 'Jane Smith',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 3 }), // Adjust the number of slides displayed based on breakpoints
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: current => setCurrentSlide(current),
  };

  return (
    <Stack
      spacing={useBreakpointValue({ base: 5, md: 10 })}
      minHeight="auto"
      bgColor="#E0FAED"
      padding='5%'
    >
      <Flex alignItems="center" justifyContent="flex-start">
        <Heading fontSize={['24px', '30px']}>Clients Testimonial</Heading>
        <Box w={['150px', '200px']} h={'2px'} bgColor={'#07BB62'}></Box>
      </Flex>

      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id}>
            <Stack
              borderRadius="10px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              bgColor={'#ffffff'}
              p={[3, 4]}
              spacing={[2, 3]}
              m={[2, 5]}
              textAlign="center"
            >
              <Flex alignItems={'center'} justifyContent="center">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  style={{
                    borderRadius: '50%',
                    height: '120px',
                    width: '120px',
                    backgroundColor: '#ff8200',
                  }}
                />
              </Flex>
              <Stack mt={[2, 4]} p={[2, 4]} width={['90%', '100%']}>
                <Text fontSize={['sm', 'md']} fontStyle="italic">
                  <span
                    style={{ color: '#07BB62', fontSize: ['20px', '30px'] }}
                  >
                    "
                  </span>
                  {card.quote}
                  <span
                    style={{ color: '#07BB62', fontSize: ['20px', '30px'] }}
                  >
                    "
                  </span>
                </Text>
                <Text
                  mt={2}
                  fontWeight="bold"
                  textAlign="right"
                  fontSize={['sm', 'md']}
                >
                  - {card.personName}
                </Text>
              </Stack>
            </Stack>
          </div>
        ))}
      </Slider>
    </Stack>
  );
}

export default ClientQuotes;
