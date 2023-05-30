import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from "react-router-dom";

const LinkBtn = ({url="/", title="Home", onClose }) => 
(
    <Link onClick={onClose} to={url}>
      <Button variant={'ghost'} >{title}</Button>
    </Link>
);


const Header = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = true;
  const user = {
  role: "admin",
  };
  
  const logoutHandler = () => {
   console.log("Logout");
   onClose();
  }

  return (
  <>
  <ColorModeSwitcher />

    <Button onClick={onOpen} colorScheme={"yellow"} zIndex={'overlay'} width="12" height={'12'} rounded='full' position={"fixed"} top="6" left='6' >
      <RiMenu5Fill />
    </Button>

    <Drawer placement ="left" onClose={onClose} isOpen={isOpen} >
    {/* use in below line to blur the image when sidebar open  backdropFilter={"blur(3px)"} */}
    <DrawerOverlay />
    <DrawerContent>
     <DrawerHeader borderBottomWidth={'1px'}> COURSE BUNDLER </DrawerHeader>

     <DrawerBody>
        <VStack spacing={'4'} alignItems="flex-start" >
        <LinkBtn  onClose={onClose} url="/" title='Home' /> 
        <LinkBtn  onClose={onClose} url="/courses" title='Browse All Courses' /> 
        <LinkBtn  onClose={onClose} url="/request" title='Request a Course' /> 
        <LinkBtn  onClose={onClose} url="/contact" title='Contact Us' />
        <LinkBtn  onClose={onClose} url="/about" title='About' />    

        <HStack 
        justifyContent={"space-evenly"} 
        position="absolute" 
        bottom={"2rem"} 
        width="80%" >
          {
            isAuthenticated ? (
            <>{/* if isAuthenticated is false */}

                <VStack>
                    <HStack>
                      <Link onClick={onClose} to="/profile" >
                      <Button variant={"ghost"} colorScheme={"yellow"} >Profile</Button>
                      </Link>   
                      <Button variant={"ghost"} onClick={logoutHandler} > 
                      <RiLogoutBoxLine/>
                       Logout 
                       </Button>
                    </HStack>

                    {
                        user && user.role === "admin" && (
                        <Link onClick={onClose} to="/admin/dashboard"> 
                          <Button colorScheme={"purple"} variant={'ghost'} >
                            <RiDashboardFill style={{margin: '4px'}} />
                            Dashboard
                        </Button>
                        </Link>
          )}
                </VStack>
            </>
          ) : 
          
          (
            <>
{/* if isAuthenticated is true */}
            <Link onClick={onClose} to="/login" >
                <Button colorScheme={"yellow"} > Login </Button>
            </Link>

            <p>OR</p>

            <Link onClick={onClose} to="/register" >
                <Button colorScheme={"yellow"} >Sign Up</Button>
            </Link>

          </>
        )} 
        </HStack>

        </VStack>
     </DrawerBody>
    </DrawerContent>
    </Drawer>
    </>
  );
};

export default Header;

