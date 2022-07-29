import { gql } from '@apollo/client';

export const SEARCH_USERS = gql`
  query Search($query: String!, $after: String, $before: String, $first: Int) {
    search(query: $query, type: USER, first: $first, after: $after, before: $before) {
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
