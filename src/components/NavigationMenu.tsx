'use client';

import { useRouter } from 'next/navigation';
import { Button, Flex } from "@chakra-ui/react"
import { FiGithub } from "react-icons/fi";
import { AiOutlineSpotify } from "react-icons/ai";

const NavigationMenu = () => {
  const router = useRouter();
  return (
    <Flex justify='center'gap={10}>
      <Button onClick={() => router.push('/github')} variant='outline' size='lg' rounded='md' colorPalette='purple'>GitHub Chart<FiGithub /></Button>
      <Button onClick={() => router.push('/spotify')} variant='outline' size='lg' rounded='md' colorPalette='green'>My Spotify<AiOutlineSpotify /></Button>
    </Flex>
  );
};

export default NavigationMenu;