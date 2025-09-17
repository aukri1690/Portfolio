import { Flex } from "@chakra-ui/react"

import NavigationMenu from "@/components/NavigationMenu";
import Profile from "@/components/Profile";
import BackGroundVideo from "@/components/BackgroundVideo";

const Home = () => {
  return (
    <>
      <BackGroundVideo />
      <Flex justify='center' align='center' direction='column' minH='100vh'>
      <Profile />
      <NavigationMenu />
      </Flex>
    </>
  );
};

export default Home;