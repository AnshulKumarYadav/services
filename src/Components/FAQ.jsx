import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const qa = [
    {
      id: 1,
      question: 'Do you offer custom design or use pre-made templates?',
      answer: 'Yes,I offer custom-tailored designs according to your needs.',
    },
    {
      id: 2,
      question: 'Do you provide website maintenance after completion?',
      answer: 'No, I do not provide any website maintenance after completion.',
    },
    {
      id: 3,
      question: 'What is your name?',
      answer: 'My name is Anshul. I am a web developer based in India.',
    },
    {
      id: 4,
      question: 'What is your name?',
      answer: 'My name is Anshul. I am a web developer based in India.',
    },
    {
      id: 5,
      question: 'What is your name?',
      answer: 'My name is Anshul. I am a web developer based in India.',
    },
  ];
  return (
    <Stack height={'auto'} padding={'5%'}>
      <Flex alignItems="center" justifyContent="flex-start" gap={2} mb={20}>
        <Heading fontSize="30px">FAQ</Heading>
        <FaRegQuestionCircle fontSize={'20px'} />
        <Box w="200px" h="2px" bgColor="#07BB62"></Box>
      </Flex>

      <Accordion allowToggle>
        {
            qa.map((item, index) => {
              return (
                <AccordionItem key={item.id} >
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize={'20px'} padding={2}>
                      {item.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    {item.answer}
                  </AccordionPanel>
                </AccordionItem>
              );
            })
  
        }
      </Accordion>
    </Stack>
  );
};

export default FAQ;
