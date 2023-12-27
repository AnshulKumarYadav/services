import React, { useState } from 'react';
import {
  Flex,
  Box,
  Link,
  Text,
  IconButton,
  useBreakpointValue,
  Drawer,
  Image,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from 'C:/Users/risha/Desktop/Freelance Website/personal-freelance-web/src/assets/AY.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItemsDisplay = useBreakpointValue({ base: 'none', md: 'flex' });
  const showContactButton = useBreakpointValue({ base: false, md: true });

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="0.5rem 2rem"
      bg="white"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
      wrap="wrap"
    >
      {/* Logo */}
      <Box>
        <Link as={ReactRouterLink} to="/" fontWeight="bold">
          <Image src={logo} boxSize={['40px', '50px']} />
        </Link>
      </Box>

      {/* Hamburger icon for small displays */}
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={toggleDrawer}
        icon={<HamburgerIcon />}
        variant="outline"
        aria-label="Open Navigation"
      />

      {/* Side navigation for small displays */}
      <Drawer placement="right" onClose={toggleDrawer} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex direction="column">
                <NavItem to="#home" onClick={toggleDrawer}>
                  Home
                </NavItem>
                <NavItem to="#about" onClick={toggleDrawer}>
                  About
                </NavItem>
                <NavItem to="#work" onClick={toggleDrawer}>
                  Work
                </NavItem>
                <NavItem to="#services" onClick={toggleDrawer}>
                  Services
                </NavItem>
                <NavItem to="#statistics" onClick={toggleDrawer}>
                  Statistics
                </NavItem>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Navigation Links */}
      <Flex align="center" display={navItemsDisplay}>
        <NavItem to="#home">Home</NavItem>
        <NavItem to="#about">About</NavItem>
        <NavItem to="#work">Work</NavItem>
        <NavItem to="#services">Services</NavItem>
        <NavItem to="#statistics">Statistics</NavItem>
      </Flex>
      {showContactButton && (
        <Button
          colorScheme="teal"
          variant="outline"
          to="/contact"
          mt={{ base: 4, md: 0 }}
        >
          Contact
        </Button>
      )}
    </Flex>
  );
};

// NavItem component
const NavItem = ({ to, children, onClick }) => {
  return (
    <Text
      as={ReactRouterLink}
      to={to}
      px={2}
      py={1}
      rounded="md"
      _hover={{ textDecoration: 'none', bg: 'blue.300', color: 'white' }}
      mr={{ base: 0, md: 2 }}
      mt={{ base: 2, md: 0 }}
      onClick={onClick}
    >
      {children}
    </Text>
  );
};

export default Navbar;
