'use client';

import { Box } from "@chakra-ui/react"

const BackgroundVideo = () => {
  return (
    <Box position='fixed' zIndex={-1} opacity={0.4}>
      <video autoPlay loop muted>
        <source src='/tokyo.mp4' type='video/mp4' />
      </video>
    </Box>
  );
};

export default BackgroundVideo;