import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg" textAlign="center">A space where I share my thoughts, experiences, and stories.</Text>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Button as={Link} to="/blog" colorScheme="teal" size="lg">Read My Blog</Button>
      </VStack>
    </Container>
  );
};

export default Index;