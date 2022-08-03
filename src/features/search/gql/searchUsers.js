import { gql } from '@apollo/client';

export const SEARCH_USERS = gql`
  query Search($query: String!, $after: String, $before: String, $first: Int) {
    search(query: $query, type: USER, first: $first, after: $after, before: $before) {
      userCount
      edges {
        node {
          ... on User {
            avatarUrl
            bio
            createdAt
            company
            databaseId
            email
            followers {
              totalCount
            }
            following {
              totalCount
            }
            isHireable
            location
            login
            name
            repositories {
              totalCount
            }
            starredRepositories {
              totalCount
            }
            status {
              message
            }
            twitterUsername
            url
            websiteUrl
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
