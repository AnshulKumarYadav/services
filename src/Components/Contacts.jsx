import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import SocialCard from './SocialCard';

const Contacts = () => {
  const inp = {
    width: '80%',
    height: '5%',
    margin: 'auto',
    marginTop: '5%',
  };
  return (
    <Flex
      id="home"
      height={'45rem'}
      justifyContent={'space-around'}
      alignItems={'center'}
      bgColor={'#000000'}
    >
      <Box>
        <Heading color={'#ffffff'} fontSize={'80px'}>Let's chat... </Heading>
        <Heading color={'#ffffff'} fontSize={'40px'}>Tell me about your project</Heading>
        <Heading style={{color:"#07BB62",fontSize:"25px"}}>Let's make something great together.</Heading>
        <SocialCard/>
      </Box>
      <Box
        borderRadius={'10px'}
        padding={'3rem'}
        bgColor={'white'}
        boxShadow={
          'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'
        }
      >
        <Heading color={'#000000'}>Send me a message</Heading>
        <form>
          <Stack w={'90%'} margin={'auto'} mt={'10'} spacing={'4'}>
            <Flex flexWrap={['wrap', 'wrap', 'none', 'none']} gap={'10px'}>
              <Input
                placeholder="Enter Your Name"
                // mr={'5'}
                // onChange={e => setName(e.target.value)}
                isRequired
              />
              <Input
                type="email"
                placeholder="Enter Your Email"
                // onChange={e => setEmail(e.target.value)}
                isRequired
              />
            </Flex>
            <Input
              placeholder="Enter Subject"
              //   onChange={e => setSubject(e.target.value)}
              isRequired
            />
            <Textarea
              placeholder="Enter Description"
              //   onChange={e => setDescription(e.target.value)}
            />
            <Flex justifyContent={'right'}>
              <Button
                w={'100px'}
                bg={'#07BB62'}
                variant="solid"
                color={'white'}
                _hover={{ bg: '#04A656' }}
                type="submit"
              >
                Submit
              </Button>
            </Flex>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Contacts;
