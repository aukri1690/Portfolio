'use client';

import { Tooltip } from "@/components/ui/tooltip"
import { Text, Image, Icon, Flex } from "@chakra-ui/react"
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
import { SiGithubcopilot } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { SiOpenai } from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";

const Profile = () => {
  return (
    <Flex align='center' direction='column' textAlign='center'>
      <Image
        src='/icon.jpg'
        alt='Profile Icon'
        boxSize={{ base: "120px", sm: "160px", md: "220px", lg: "250px" }}
        borderRadius='full'
        fit='cover'
        mt={{ base: 2, md: 3 }}
      />
      <Text mt={{ base: 3, md: 4 }} fontSize={{ base: 'md', md: 'lg' }}>-- 基本情報 --</Text>
      <Text mt={3} fontSize={{ base: 'md', md: 'lg' }}>永田浬久</Text>
      <Text mt={1} fontSize={{ base: 'sm', md: 'md' }}>2005年1月16日</Text>
      <Text mt={1} fontSize={{ base: 'sm', md: 'md' }}>名古屋市立大学 データサイエンス学部 3年</Text>

      <Text mt={{ base: 4, md: 5 }} fontSize={{ base: 'md', md: 'lg' }}>-- 使用技術 --</Text>
      <Flex
        align='center'
        justify='center'
        direction='row'
        flexWrap='wrap'
        gap={{ base: 2, sm: 3, md: 4 }}
        mt={{ base: 3, md: 4 }}
        maxW='container.md'
      >
        <Tooltip content="TypeScript">
          <Icon as={SiTypescript} boxSize={{ base: 7, sm: 8, md: 9 }} />
        </Tooltip>
        <Tooltip content="React">
          <Icon as={FaReact} boxSize={{ base: 7, sm: 8, md: 9 }} />
        </Tooltip>
        <Tooltip content="Next.js">
          <Icon as={RiNextjsLine} boxSize={{ base: 7, sm: 8, md: 9 }} />
        </Tooltip>
        <Tooltip content="GraphQL">
          <Icon as={GrGraphQl} boxSize={{ base: 7, sm: 8, md: 9 }} />
        </Tooltip>
        <Tooltip content="Chakra UI">
          <Icon as={SiChakraui} boxSize={{ base: 7, sm: 8, md: 9 }} />
        </Tooltip>
        <Tooltip content="GitHub">
          <Icon as={BsGithub} boxSize={{ base: 7, sm: 8, md: 9 }} />
        </Tooltip>
        <Tooltip content="GitHub Copilot">
          <Icon as={SiGithubcopilot} boxSize={{ base: 7, sm: 8, md: 9 }} />
        </Tooltip>
        <Tooltip content="ChatGPT">
          <Icon as={SiOpenai} boxSize={{ base: 7, sm: 8, md: 9 }} />
        </Tooltip>
        <Tooltip content="Notion">
          <Icon as={RiNotionFill} boxSize={{ base: 7, sm: 8, md: 9 }} />
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Profile;