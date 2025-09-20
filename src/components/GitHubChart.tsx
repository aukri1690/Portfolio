'use client';

import { useEffect, useState } from 'react';
import { Card, Flex } from "@chakra-ui/react"

const GitHubChart = () => {
  const [pullRequestCount, setPullRequestCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        setPullRequestCount(data.viewer.pullRequests.totalCount);
      })
      .catch(err => console.error(err));
  }, []);

  return (pullRequestCount === null) ?
    (
      <Flex justify='center' align='center' minH='100vh'>
        <div>Now Loading...</div>
      </Flex>
    ) : (
      <Flex justify='center' align='center' minH='100vh'>
        <Card.Root textAlign='center' variant='outline' width='250px' height='250px'>
          <Card.Title fontSize='3xl' fontWeight={900} mt={8} mb={-8}>現在のPR総数</Card.Title>
          <Flex flex='1' justify='center' align='center'>
            <Card.Title fontSize='8xl' fontFamily='Impact' color='purple.600'>{pullRequestCount}</Card.Title>
          </Flex>
        </Card.Root>
      </Flex>
    );
};

export default GitHubChart;