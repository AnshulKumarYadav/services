import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import SocialCard from './SocialCard';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const toast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  //   const form = useRef();

  let submitForm = e => {
    e.preventDefault();

    fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_3fqa39v',
        template_id: 'template_ce5qexv',
        user_id: '_DrOsoMqXO_KcO1Fq',
        template_params: {
          name: name,
          email: email,
          subject: subject,
          description: description,
        },
      }),
    })
      .then(res => {
        if (res.status == 200) {
          handleToast('Message Sent Successfully', 'success');
        }
      })
      .catch(err => handleToast(err.message, 'error'));
  };

  let contactStyle = {
    margin: 'auto',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    borderRadius: '50%',
    width: 'fit-content',
    padding: '10px',
  };

  const handleToast = (title, status) => {
    toast({
      title: title,
      status: status,
      isClosable: true,
      duration: 2000,
      position: 'top',
    });
  };

  return (
    <Flex
      id="Contacts"
      minHeight="100vh"
      justifyContent="space-around"
      alignItems="center"
      bgColor="#000000"
      padding={['2rem', '4rem', '6rem']}
      flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
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
        <form onSubmit={submitForm}>
          <Stack
            spacing={['2', '3', '4']}
            mt={['4', '6', '8']}
            width={['100%', '90%', '90%']}
            margin="auto"
          >
            <Input placeholder="Enter Your Name" onChange={(e)=> setName(e.target.value)} isRequired />
            <Input type="email" placeholder="Enter Your Email" onChange={(e)=> setEmail(e.target.value)} isRequired />

            <Input placeholder="Enter Subject" onChange={(e)=> setSubject(e.target.value)} isRequired />
            <Textarea placeholder="Enter Description" onChange={(e)=> setDescription(e.target.value)} />
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
