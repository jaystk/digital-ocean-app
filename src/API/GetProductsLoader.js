import { useQuery, gql, createQueryPreloader } from '@apollo/client';
import React, { useState, useEffect } from 'react'; // Ensure React is imported if you're using JSX
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import client from '../apollo-client.jsx'; 

const GET_PRODUCTS = gql`
  query GetProducts($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          id
          productType
          onlineStoreUrl
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
          collections(first: 9) {
            edges {
              node {
                id
                handle
              }
            }
          }
        }
      }
    }
  }
`;

export async function GetProductsLoader({ first = 10, cursor = null }) {
  
  const preloadQuery = createQueryPreloader(client);
  return preloadQuery(GET_PRODUCTS, { variables: { first, after: cursor } });
  
}