import { Box, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import {TiSocialYoutubeCircular, TiSocialInstagramCircular} from 'react-icons/ti';
import {DiGithub} from 'react-icons/di';

function Footer() {
  return <Box padding={'4'} bg='blackAlpha.900' minH={'10vh'} > 
  
  <Stack direction={['column', 'row']} >
  <VStack alignItems={["center", 'flex-start']} width='full' >
    <Heading children='All Right Resrved' color={'white'} />
    <Heading children='@FahadSoft Pvt. Ltd.' color={'yellow.400'} size='sm' fontFamily={'body'} />

  </VStack>

  <HStack spacing={['2', '10']} justifyContent='center' color={'white'} fontSize='50' >
  <a href="https://youtube.com/6packprogrammer" target={'_blank'} rel='noreferrer' > 
    <TiSocialYoutubeCircular />
   </a>
   <a href="https://www.instagram.com/fahadraza533/" target={'_blank'} rel='noreferrer' > 
    <TiSocialInstagramCircular />
   </a>
   <a href="https://github.com/FahadRaza7060" target={'_blank'} rel='noreferrer' > 
    <DiGithub />
   </a>

  </HStack>

  </Stack>
  </Box>

}

export default Footer;
