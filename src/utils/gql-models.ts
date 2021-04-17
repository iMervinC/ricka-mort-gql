import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query SearchCharacters($page: Int!, $search: String!) {
    characters(page: $page, filter: { name: $search }) {
      info {
        prev
        next
        count
      }
      results {
        id
        name
        status
        species
        image
        location {
          name
        }
        origin {
          name
          dimension
        }
      }
    }
  }
`

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      origin {
        name
        dimension
      }
      location {
        name
      }
      episode {
        id
        name
      }
    }
  }
`
