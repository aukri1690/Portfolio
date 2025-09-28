import { Flex } from "@chakra-ui/react"
import Profile from "@/components/Profile";
import BackGroundVideo from "@/components/BackgroundVideo";
import RouterButton from "@/components/RouterButton";

const Home = () => {
  return (
    <>
      <BackGroundVideo />
      <Flex justify='center' align='center' direction='column' minH='100vh'>
      <Profile />
      <RouterButton />
      </Flex>
    </>
  );
};

export default Home;