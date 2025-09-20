import { NextResponse } from 'next/server';
import { graphql } from '@octokit/graphql';

const GET = async () => {
  try {
    const client = graphql.defaults({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    const query = `
      query {
        viewer {
          login
          pullRequests {
            totalCount
          }
        }
      }
    `;

    const data = await client(query);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
};

export { GET };