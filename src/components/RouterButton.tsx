import { Button, Flex, Link } from "@chakra-ui/react"
import { SiGithub } from "react-icons/si";

const RouterButton = () => {
  return (
    <Flex mt={10} >
      <Button size='lg' rounded='md' colorPalette='purple'>
          <Link href="https://github.com/aukri1690" target='_blank' rel='noopener noreferrer'>
          GitHub
          <SiGithub/>
          </Link> 
      </Button>
    </Flex>
  );
};

export default RouterButton;