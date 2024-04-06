import { Box, Container, Flex, Heading, Text, Button, Image, VStack, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaMusic, FaTicketAlt, FaMapMarkedAlt, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} color={color}>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          {/* Hero Section */}
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <Box flexShrink={0}>
              <Heading as="h1" size="xl" fontWeight="bold">
                The Rockers Band
              </Heading>
              <Text fontSize="lg" mt={4}>
                Join us on our latest tour across the globe!
              </Text>
              <Button mt={6} colorScheme="teal" leftIcon={<FaTicketAlt />}>
                Buy Tickets
              </Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMG9uJTIwc3RhZ2V8ZW58MHx8fHwxNzEyMzg0MTcwfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" mt={{ base: 4, md: 0 }} maxW="sm" alignSelf="center" />
          </Flex>

          {/* Upcoming Shows Section */}
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Upcoming Shows
            </Heading>
            <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" mb={2}>
              <Text fontWeight="semibold">New York</Text>
              <Text>20th May 2023</Text>
              <Button colorScheme="pink" size="sm">
                More Info
              </Button>
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" mb={2}>
              <Text fontWeight="semibold">London</Text>
              <Text>5th June 2023</Text>
              <Button colorScheme="pink" size="sm">
                More Info
              </Button>
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
              <Text fontWeight="semibold">Tokyo</Text>
              <Text>25th July 2023</Text>
              <Button colorScheme="pink" size="sm">
                More Info
              </Button>
            </Flex>
          </Box>

          {/* Social Media Section */}
          <HStack spacing={4} justify="center">
            <Icon as={FaInstagram} w={6} h={6} />
            <Icon as={FaTwitter} w={6} h={6} />
            <Icon as={FaFacebookF} w={6} h={6} />
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
