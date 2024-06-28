import React from 'react';
import { gql, createQueryPreloader } from '@apollo/client';
import client from '../apollo-client.jsx';  // Make sure this import is correctly pointing to your Apollo Client setup

// GraphQL query to fetch a collection by its handle and its products
const GET_COLLECTION_BY_HANDLE = gql`
  query getCollectionByHandle($handle: String!, $first: Int, $after: String) {
    collection(handle: $handle) {
      id
      handle
      products(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            title
            id
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  }
`;

export async function CollectionProductDisplayLoader({ params }) {
  const { collection } = params; // Destructure 'collection' directly from 'params'
  console.log(collection); // Log the 'collection' variable, not 'params.collection'
  const { handle } = collection; // Destructure 'handle' from 'collection'
  const first = 10;
  const cursor = null;
  console.log(handle);
  const preloadQuery = createQueryPreloader(client); // Ensure 'client' is correctly instantiated with Apollo Client

  // Execute the preloadQuery with the GraphQL query and variables
  return preloadQuery(GET_COLLECTION_BY_HANDLE, {
    variables: { handle: params.collection, first, after: cursor }
  });
}
