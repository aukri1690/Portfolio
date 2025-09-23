import { Flex } from "@chakra-ui/react"
import Profile from "@/components/Profile";
import BackGroundVideo from "@/components/BackgroundVideo";

const Home = () => {
  return (
    <>
      <BackGroundVideo />
      <Flex justify='center' align='center' direction='column' minH='100vh'>
      <Profile />
      </Flex>
    </>
  );
};

export default Home;