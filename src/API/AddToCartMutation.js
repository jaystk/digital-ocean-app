import { gql } from '@apollo/client';

const ADD_TO_CART_MUTATION = gql`
  mutation AddToCart($merchandiseId: ID!, $quantity: Int!) {
    cartCreate(
      input: {
        lines: [
          {
            quantity: $quantity
            merchandiseId: $merchandiseId
          }
        ]
      }
    ) {
      cart {
        id
        lines {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default ADD_TO_CART_MUTATION;