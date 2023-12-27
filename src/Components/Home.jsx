import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import gif from '../assets/gifpw.gif';

const Home = () => {
  return (
    <Flex
      id="home"
      height="45rem"
      alignItems="center"
      background="#1DCD8D"
      p={10}
      position="relative"
      justify="space-between" // To align content and background GIF
    >
      <Stack p={10} spacing={5} zIndex={1} maxWidth="50%"> {/* Adjust width as needed */}
        <Heading fontSize={60} color="white">
          Experience Excellence With Me.
        </Heading>
        <Heading fontSize={20} color="white">
          Innovative Solutions for Your Digital Success
        </Heading>
        <Button width={'fit-content'} variant="solid" bgColor="#2B2B2B" color="#ffffff" _hover={{bgColor:"#1C1C1C"}}>
          Explore Services
        </Button>
      </Stack>
      <Box
        position="absolute"
        top={0}
        right={0} // Align the GIF to the right
        width="50%" // Adjust the width as needed
        height="100%"
        zIndex={0} // Place behind other elements but above the Flex background
        style={{
          backgroundImage: `url(${gif})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></Box>
    </Flex>
  );
};

export default Home;
