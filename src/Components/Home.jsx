import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import gif from '../assets/gifpw.gif';

const Home = () => {
  return (
    <Flex
      id="Home"
      height="45rem"
      alignItems={"center"}
      background="#1DCD8D"
      p={10}
      position="relative"
      justify="space-between"
    >
      <Stack p={10} spacing={5} zIndex={1} maxWidth={["100%","80%","50%"]}>
        <Heading fontSize={[45,40,50,70]} color="white">
          Experience Excellence With Me.
        </Heading>
        <Heading fontSize={[20,30]} color="white">
          Innovative Solutions for Your Digital Success
        </Heading>
        <Button width={'fit-content'} variant="solid" bgColor="#2B2B2B" color="#ffffff" _hover={{bgColor:"#1C1C1C"}}>
          <a href="#Services">Explore Services</a>
        </Button>
      </Stack>
      <Box
      display={['none','none','block']}
        position="absolute"
        top={0}
        right={0} 
        width={"50%"}
        height="100%"
        zIndex={0}
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

