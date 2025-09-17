'use client';

import { Text, Image, Flex } from "@chakra-ui/react"

const Profile = () => {
  return(
    <Flex align='center' justify='center' direction='column' minH='60vh'>
      <Image src='/icon.jpg' alt='Profile Icon' boxSize='250px'borderRadius='full' fit='cover' mt={2} />
      <Text mt={5}>永田浬久</Text>
      <Text mt={1}>2005年1月16日</Text>
      <Text mt={1}>名古屋市立大学 データサイエンス学部 3年</Text>
    </Flex>
  );
};

export default Profile;