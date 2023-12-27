import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import image from '../assets/myfiverrprofileimage.png';
const Home = () => {
  return (
    <Stack
      id="home"
      height={'45rem'}
      alignItems={'center'}
      backgroundImage="radial-gradient(circle at 0% 0%, #80cba5, #f1edc6, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)"
    >
      <Flex
        width={'80%'}
        height={'80%'}
        margin={'auto'}
        justifyContent={'space-around'}
      >
        <Box width={'38%'}>
          <h3 style={{ color: '#07BB62', fontSize: '40px' }}>Hii I'm</h3>
          <h1 style={{ fontSize: '80px', fontFamily: 'sans-serif' }}>
            Anshul Kumar Yadav
          </h1>
          <p style={{ fontSize: '20px' }}>
            Driven and adaptable aspiring freelancer in web development and
            design, committed to crafting innovative and user-centric digital
            solutions.
          </p>
          <Button
            marginTop={'10'}
            bg={'#07BB62'}
            variant="solid"
            color={'white'}
            _hover={{ bg: '#04A656' }}
            to="#contact"
          >
            Contact Me
          </Button>
        </Box>
        <Box>
          <img
            src={image}
            alt="Anshul Photo"
            style={{
              borderRadius: '50%',
              backgroundColor: '#E0FAED',
              margin: 'auto',
              // marginTop:"10%"
            }}
          />
        </Box>
      </Flex>
    </Stack>
  );
};

export default Home;
