'use client';

import { useRouter } from 'next/navigation';
import { Button, Flex } from "@chakra-ui/react"
import { FiGithub } from "react-icons/fi";

const NavigationMenu = () => {
  const router = useRouter();
  return (
    <Flex mt={10} >
      <Button onClick={() => router.push('/github')}  size='lg' rounded='md' colorPalette='purple'>GitHub Chart<FiGithub /></Button>
    </Flex>
  );
};

export default NavigationMenu;