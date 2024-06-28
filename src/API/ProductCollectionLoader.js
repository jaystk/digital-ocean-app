import { useQuery, gql } from '@apollo/client';
import React, { useState, useEffect } from 'react'; // Ensure React is imported if you're using JSX
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import client from '../apollo-client.jsx'; 

const GET_PRODUCT_BY_HANDLE = gql`
  query getProductByHandle($handle: String) {
    product(handle: $handle) {
      description
      title
      id
      images(first: 10) {
        edges {
          node {
            url
          }
        }
      }
      collections(first: 3) {
        edges {
          node {
            id
            handle
            image {
              src
            }
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            selectedOptions{
              name
              value
            }
          }
        }
      }
    }
  }
`;

export async function ProductCollectionLoader({ params }) {
  const { handle } = params
  console.log(params)
  console.log(handle)

  try {
      const { data } = await client.query({
          query: GET_PRODUCT_BY_HANDLE,
          variables: { handle },
      });
      console.log(data)
      return data.product;
  } catch (error) {
      console.error('Error fetching product:', error.message);
      throw new Error('Failed to fetch product data');
  }
}