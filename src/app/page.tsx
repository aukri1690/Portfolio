import { Flex } from "@chakra-ui/react"
import Profile from "@/components/Profile";
import BackGroundVideo from "@/components/BackgroundVideo";
import RouterButton from "@/components/RouterButton";

const Home = () => {
  return (
    <>
      <BackGroundVideo />
      <Flex justify='center' align='center' direction='column' minH='100vh' px={{ base: 4, md: 6 }} gap={{ base: 6, md: 8 }}>
      <Profile />
      <RouterButton />
      </Flex>
    </>
  );
};

export default Home;