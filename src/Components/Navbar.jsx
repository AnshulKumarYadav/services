import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Link,
  Text,
  IconButton,
  useBreakpointValue,
  Button,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../assets/AY.png';
import logo2 from '../assets/AY2.png';

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const navItemsDisplay = useBreakpointValue({ base: 'none', md: 'flex' });
  const showContactButton = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="0.5rem 2rem"
      bg={isTop ? 'transparent' : 'white'}
      boxShadow={isTop ? 'none' : 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}
      position={isTop ? 'absolute' : 'sticky'}
      top={0}
      left={0}
      right={0}
      zIndex={999}
      transition="background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
    >
      {/* Logo */}
      {isTop ? (
        <Box>
          <Link as={ReactRouterLink} to="/" fontWeight="bold">
            <Image src={logo2} boxSize={['40px', '50px']} />
          </Link>
        </Box>
      ) : (
        <Box>
          <Link as={ReactRouterLink} to="/" fontWeight="bold">
            <Image src={logo} boxSize={['40px', '50px']} />
          </Link>
        </Box>
      )}

      {/* Hamburger icon for small displays */}
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        ref={btnRef}
        onClick={onOpen}
        icon={<HamburgerIcon />}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <Stack spacing={4} alignItems={'center'}>
            <NavItem to="#Home">Home</NavItem>
            <NavItem to="#About">About</NavItem>
            <NavItem to="#Work">Work</NavItem>
            <NavItem to="#Services">Services</NavItem>
          </Stack>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Navigation Links */}
      <Flex align="center" display={navItemsDisplay}>
        <NavItem to="#Home">Home</NavItem>
        <NavItem to="#About">About</NavItem>
        <NavItem to="#Work">Work</NavItem>
        <NavItem to="#Services">Services</NavItem>
      </Flex>
      {showContactButton && (
        <Button
          bgColor="#2B2B2B"
          color={'white'}
          variant="solid"
          to="/contact"
          mt={{ base: 4, md: 0 }}
          _hover={{ bgColor: '#1C1C1C' }}
        >
          <a href="#Contacts">Contact</a>
        </Button>
      )}
    </Flex>
  );
};

// NavItem component
const NavItem = ({ to, children }) => {
  return (
    <Text
      px={2}
      py={1}
      rounded="md"
      _hover={{ textDecoration: 'none' }}
      mr={{ base: 0, md: 2 }}
      mt={{ base: 2, md: 0 }}
      fontWeight={'bold'}
    >
      <a href={to}>{children}</a>
    </Text>
  );
};

export default Navbar;
