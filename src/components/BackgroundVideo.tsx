'use client';

import { Box } from "@chakra-ui/react"

const BackgroundVideo = () => {
  return (
    <Box position='fixed' inset='0' zIndex={-1} opacity={0.4} pointerEvents='none'>
      <video autoPlay loop muted playsInline style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}>
        <source src='/tokyo.mp4' type='video/mp4' />
      </video>
    </Box>
  );
};

export default BackgroundVideo;