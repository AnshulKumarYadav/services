import { Button, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { SiUpwork, SiFiverr, SiLinkedin, SiGmail, SiPhone } from 'react-icons/si';
import { ImPhone } from "react-icons/im";

const SocialCard = () => {
  const cards = [
    {
      id: 1,
      iconName: <SiFiverr color="#1DBF73" />,
      link: 'https://www.fiverr.com/rishabhyadav757',
    },
    {
      id: 2,
      iconName: <SiUpwork color="#1DBF73" />,
      link: 'https://www.upwork.com/ab/flservices/workwith/anshulyadav3602',
    },
    {
      id: 3,
      iconName: <SiLinkedin color="#0A66C2" />,
      link: 'https://www.linkedin.com/in/anshul-kumar-yadav/',
    },
    {
      id: 4,
      iconName: <SiGmail color="#F96168" />,
      link: 'mailto:rishabhyadav3602@gmail.com',
    },
    {
      id: 4,
      iconName: <ImPhone color="#11B80C" />,
      link: 'tel:+917060476249',
    },
  ];
  return (
    <Flex gap={10} mt={10} alignItems={'center'}>
      {cards.map((card, index) => (
        <a href={card.link} target='blank'>
          <Button
            borderRadius={'60%'}
            bgColor={'#ffffff'}
            boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'}
            _hover={{
              boxShadow:"0px 0px 44px -3px rgba(7,187,97,1);"
            }}
          >
            {card.iconName}
          </Button>
        </a>
      ))}
    </Flex>
  );
};

export default SocialCard;
