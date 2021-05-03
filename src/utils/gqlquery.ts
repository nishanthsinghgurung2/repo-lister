import gql from 'graphql-tag';

export const QUERY_REPO_LIST = gql`
  query($first: Int!, $after: String, $query: String!, $type: SearchType!) {
    search(first: $first, after: $after, query: $query, type: $type) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            url
            forkCount
            stargazerCount
          }
        }
      }
      pageInfo {
        startCursor
        hasNextPage
        endCursor
      }
    }
  }
`;
