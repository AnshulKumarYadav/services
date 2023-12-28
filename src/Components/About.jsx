import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import image from '../assets/myfiverrprofileimage.png';
import SocialCard from './SocialCard';

const About = () => {
  return (
    <Stack id="About" height={['auto','auto',"auto",'45rem']} padding={'5%'}>
      <Flex alignItems="center" justifyContent="flex-start" gap={2} mb={20} >
        <Heading fontSize="30px">About Me</Heading>
        <Box w="200px" h="2px" bgColor="#07BB62"></Box>
      </Flex>
      <Flex
        width={'85%'}
        height={'auto'}
        margin={'auto'}
        justifyContent={['center','center','space-around','space-around']}
        flexDirection={['column-reverse','column-reverse','column-reverse','row']}
      >
        <Box width={['100%','100%','100%','60%']}>
          <Heading style={{ color: '#07BB62', fontSize: ['20px','30px','40px'] }}>Hii I'm</Heading>
          <Heading fontSize={['40px','50px','60px','80px']}>
            Anshul Kumar Yadav
          </Heading>
          <Text style={{ fontSize: '20px' }}>
            Driven and adaptable aspiring freelancer in web development and
            design, committed to crafting innovative and user-centric digital
            solutions.
          </Text>
          <SocialCard />
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
