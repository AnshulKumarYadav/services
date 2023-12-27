import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import image from '../assets/myfiverrprofileimage.png';
import SocialCard from './SocialCard';

const About = () => {
  return (
    <Stack id="about" height={'45rem'} padding={'5%'}>
      <Flex alignItems="center" justifyContent="flex-start" gap={2} mb={20}>
        <Heading fontSize="30px">About Me</Heading>
        <Box w="200px" h="2px" bgColor="#07BB62"></Box>
      </Flex>
      <Flex
        width={'85%'}
        height={'80%'}
        margin={'auto'}
        justifyContent={'space-around'}
      >
        <Box width={'60%'}>
          <h3 style={{ color: '#07BB62', fontSize: '40px' }}>Hii I'm</h3>
          <h1 style={{ fontSize: '80px', fontFamily: 'sans-serif' }}>
            Anshul Kumar Yadav
          </h1>
          <p style={{ fontSize: '20px' }}>
            Driven and adaptable aspiring freelancer in web development and
            design, committed to crafting innovative and user-centric digital
            solutions.
          </p>
          <SocialCard/>
        </Box>
        <Box>
          <img
            src={image}
            alt="Anshul Photo"
            style={{
              width: '100%',
              height: '65%',
              borderRadius: '10%',
              backgroundColor: '#E0FAED',
              margin: 'auto',
            }}
          />
        </Box>
      </Flex>
    </Stack>
  );
};

export default About;
