import { gql } from '@apollo/client';

export const SEARCH_USERS = gql`
  query Search($query: String!) {
    search(query: $query, type: USER, first: 10) {
      userCount
      edges {
        node {
          ... on User {
            login
            name
            avatarUrl
            bio
            followers {
              totalCount
            }
            repositories {
              totalCount
            }
            starredRepositories {
              totalCount
            }
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
