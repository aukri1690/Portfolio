'use client';

import { useEffect, useState } from 'react';
import { Box, Card, Flex } from "@chakra-ui/react"
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

type PRNode = {
  createdAt: string;
};

type PRResponse = {
  viewer: {
    pullRequests: {
      totalCount: number;
      nodes: PRNode[];
    };
  };
};

const GitHubStatistics = () => {
  const [pullRequestCount, setPullRequestCount] = useState<number | null>(null);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/github");
        const data: PRResponse = await res.json();

        setPullRequestCount(data.viewer.pullRequests.totalCount);

        const grouped = groupByDate(data.viewer.pullRequests.nodes);

        setChartData({
          labels: grouped.map(item => item.date),
          datasets: [
            {
              label: "PR数",
              data: grouped.map(item => item.count),
              borderColor: "rgba(138, 3, 249, 1)",
              backgroundColor: "rgba(138, 3, 249, 1)",
              fill: true,
            },
          ],
        });
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (pullRequestCount === null || chartData === null) ?
    (
      <Flex justify='center' align='center' minH='100vh'>
        <div>Now Loading...</div>
      </Flex>
    ) : (
      <>
      <Flex justify='center' align='center' direction='row' minH='100vh' gap={8}>
        <Card.Root textAlign='center' variant='outline' width='300px' height='300px'>
          <Card.Title fontSize='3xl' fontWeight={900} mt={7} mb={-7}>Total PRs</Card.Title>
          <Flex flex='1' justify='center' align='center'>
            <Card.Title fontSize='8xl' fontFamily='Impact' color='purple.600'>{pullRequestCount}</Card.Title>
          </Flex>
        </Card.Root>
        <Card.Root textAlign='center' variant='outline' width='480px' height='300px' p={5}>
          <Card.Title fontSize='3xl' fontWeight={900} mt={3} mb={3}>PRs Over Time</Card.Title>
          <Box h='100%'>
            <Line
              data={chartData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </Box>
        </Card.Root>
      </Flex>
      </>
    );
};

export default GitHubStatistics;

const groupByDate = (prs: PRNode[]) => {
  const counts: Record<string, number> = {};

  prs.forEach(pr => {
    const date = pr.createdAt.split("T")[0];
    counts[date] = (counts[date] || 0) + 1;
  });

  return Object.entries(counts).map(([date, count]) => ({ date, count }));
};