import { Container, Text, VStack, Heading, Box, Image, Button, useColorMode, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg" textAlign="center">A space where I share my thoughts, experiences, and stories.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Button as={Link} to="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
        <VStack spacing={4} mt={8} width="100%">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%" bg={colorMode === "light" ? "white" : "gray.700"} position="relative">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              <IconButton
                icon={<DeleteIcon />}
                colorScheme="red"
                size="sm"
                position="absolute"
                top="1rem"
                right="1rem"
                onClick={() => handleDelete(index)}
              />
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;