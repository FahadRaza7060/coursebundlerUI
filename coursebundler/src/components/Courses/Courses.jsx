import React, { useState } from "react";
import {Button, Container, Heading, HStack, Input, Stack, Text, VStack, Image} from '@chakra-ui/react';
import { Link } from "react-router-dom";

// make new React component inside a Reat Component
const Course = ({views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount}) => {
    return (
       <VStack className="course" alignItems={["center", "flex-start"]} >
       <Image src={imageSrc} boxSize="60" objectFit={'contain'}  />
       <Heading textAlign={["center", "left"]} maxW="200px" size={'sm'} fontFamily={'sans-serif'} noOfLines={3} children={title} />
       <Text noOfLines={2} children={description} />

       <HStack>
       <Text fontWeight={'bold'} textTransform='uppercase' children={"Creator"} />

       <Text fontFamily={'body'} textTransform='uppercase' children={creator} />
       </HStack>

       <Heading textAlign={'center'}  size="xs" children={`Lectures - ${lectureCount}`} textTransform='uppercase' />

       <Heading  size="xs" children={`Views - ${views}`} textTransform='uppercase'  />

       <Stack direction={["colums", "row"]} alignItems="center" >
       <Link to={`/course/${id}`} >
         <Button colorScheme={'yellow'} > Watch Now </Button>
       </Link>
       <Button variant={"ghost"} colorScheme={'yellow'} onClick={() => addToPlaylistHandler(id)} > Add to Playlist </Button>

       </Stack>

       </VStack> 
    )
}

const Courses = () => {
    
    const [keyword, setKeyword] = useState();
    const [category, setCategory] = useState();

    const addToPlaylistHandler = () => {
        console.log("Adding to Playlist");
    }

    const categories = [
        "Web Development", "Artificial Intellegence", "Data Structures" , "Game Development", "App Development"
    ];

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

      <Input  value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search a course..."  type={'text'} focusBorderColor='yellow.500' />
      
      {/* for hide the scrolbar */}
      {/* css={{"&::-webkit-scrollbar": {display: "none"},}} */}
      <HStack overflow={"auto"} paddingY="8" >
        
        {
            categories.map((item, index) => (
                <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
                <Text children={item} />
                </Button>
            ))
        }

      </HStack>

      <Stack 
      direction={['column','row']}
      flexWrap='wrap' 
      justifyContent={["flex-start", "space-evenly"]} 
      alignItems={["center", "flex-start"]}
      >

      <Course 
      title={"Sample"}
      description={"sample"}
      views={23}
      imageSrc={'https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg'}
      id={"sample"}
      creator={"sample boy"}
      lectureCount={3} 
      addToPlaylistHandler={addToPlaylistHandler} />

      </Stack>

    </Container>
  );
};

export default Courses;
