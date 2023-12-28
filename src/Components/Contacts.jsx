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
  return (
    <Flex
      id="Contacts"
      minHeight="100vh"
      justifyContent="space-around"
      alignItems="center"
      bgColor="#000000"
      padding={['2rem', '4rem', '6rem']}
      flexWrap={['wrap', 'wrap', 'nowrap']}
    >
      <Box
        flex={['0 0 100%', '0 0 100%', '0 0 45%']}
        textAlign={['center', 'center', 'left']}
      >
        <Heading color="#ffffff" fontSize={['40px', '60px', '80px']}>
          Let's chat...{' '}
        </Heading>
        <Heading color="#ffffff" fontSize={['24px', '36px', '40px']}>
          Tell me about your project
        </Heading>
        <Heading style={{ color: '#07BB62', fontSize: '20px' }}>
          Let's make something great together.
        </Heading>
        <SocialCard />
      </Box>
      <Box
        flex={['0 0 100%', '0 0 100%', '0 0 45%']}
        borderRadius="10px"
        padding={['2rem', '3rem', '4rem']}
        bgColor="white"
        boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
        marginTop={['2rem', '2rem', '0']}
      >
        <Heading color="#000000" fontSize={['24px', '28px', '32px']}>
          Send me a message
        </Heading>
        <form>
          <Stack
            spacing={['2', '3', '4']}
            mt={['4', '6', '8']}
            width={['100%', '90%', '90%']}
            margin="auto"
          >
            <Flex
              flexWrap={['wrap', 'wrap', 'nowrap', 'nowrap']}
              gap={['10px', '10px', '0', '0']}
            >
              <Input placeholder="Enter Your Name" isRequired />
              <Input type="email" placeholder="Enter Your Email" isRequired />
            </Flex>
            <Input placeholder="Enter Subject" isRequired />
            <Textarea placeholder="Enter Description" />
            <Flex justifyContent={['center', 'center', 'flex-end']}>
              <Button
                w={['100%', '120px', '120px']}
                bg="#07BB62"
                variant="solid"
                color="white"
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
