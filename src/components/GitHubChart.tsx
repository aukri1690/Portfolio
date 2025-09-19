'use client';

import { useEffect, useState } from 'react';

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

  return (pullRequestCount === null) ? (<div>Now Loading...</div>) : (<p>PR総数：{pullRequestCount}</p>);
};

export default GitHubChart;