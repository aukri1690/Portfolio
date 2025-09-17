'use client';

import { Text, Image, Icon, Flex } from "@chakra-ui/react"
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
import { SiGithubcopilot } from "react-icons/si";

const Profile = () => {
  return (
      <Flex align='center' direction='column' >
        <Image src='/icon.jpg' alt='Profile Icon' boxSize='250px' borderRadius='full' fit='cover' mt={2} />
        <Text mt={5}>永田浬久</Text>
        <Text mt={1}>2005年1月16日</Text>
        <Text mt={1}>名古屋市立大学 データサイエンス学部 3年</Text>
        <Flex align='center' direction='row' gap={4} mt={4}>
          <Icon as={SiTypescript} boxSize={9} />
          <Icon as={FaReact} boxSize={9} />
          <Icon as={RiNextjsLine} boxSize={9} />
          <Icon as={SiChakraui} boxSize={9} />
          <Icon as={SiGithubcopilot} boxSize={9} />
        </Flex>
      </Flex>
  );
};

export default Profile;