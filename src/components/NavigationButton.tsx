'use client';

import { useRouter } from 'next/navigation';
import { Button, Flex } from "@chakra-ui/react"
import { FiGithub } from "react-icons/fi";

const NavigationButton = () => {
  const router = useRouter();
  return (
    <Flex mt={10} >
      <Button onClick={() => router.push('/statistics')}  size='lg' rounded='md' colorPalette='purple'>GitHub Statistics<FiGithub /></Button>
    </Flex>
  );
};

export default NavigationButton;