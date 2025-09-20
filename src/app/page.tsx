import { Flex } from "@chakra-ui/react"
import NavigationButton from "@/components/NavigationButton";
import Profile from "@/components/Profile";
import BackGroundVideo from "@/components/BackgroundVideo";

const Home = () => {
  return (
    <>
      <BackGroundVideo />
      <Flex justify='center' align='center' direction='column' minH='100vh'>
      <Profile />
      <NavigationButton />
      </Flex>
    </>
  );
};

export default Home;