'use client';

import { Tooltip } from "@/components/ui/tooltip"
import { Text, Image, Icon, Flex } from "@chakra-ui/react"
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";

const Profile = () => {
  return (
    <Flex align='center' direction='column' >
      <Image src='/icon.jpg' alt='Profile Icon' boxSize='250px' borderRadius='full' fit='cover' mt={2} />
      <Text mt={3} fontSize='lg'>-- Profile --</Text>
      <Text mt={3}>永田浬久</Text>
      <Text mt={1}>2005年1月16日</Text>
      <Text mt={1}>名古屋市立大学 データサイエンス学部 3年</Text>
      <Text mt={3} fontSize='lg'>-- Tech Stack --</Text>
      <Flex align='center' direction='row' gap={2} mt={4}>
        <Tooltip content="TypeScript">
          <Icon as={SiTypescript} boxSize={9} />
        </Tooltip>
        <Tooltip content="React">
          <Icon as={FaReact} boxSize={9} />
        </Tooltip>
        <Tooltip content="Next.js">
          <Icon as={RiNextjsLine} boxSize={9} />
        </Tooltip>
        <Tooltip content="GraphQL">
          <Icon as={GrGraphQl} boxSize={9} />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Profile;