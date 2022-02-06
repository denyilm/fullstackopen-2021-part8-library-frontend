import { gql  } from '@apollo/client'

/**
 * has to be exactly same as its counterpart in the backend
 */

export const ALL_AUTHORS = gql`
query  {
  allAuthors  {
    name
    born
    bookCount
  }
}
`
export const ALL_BOOKS = gql`
query  {
  allBooks  {
    title
    author
    published
  }
}
`

/**
 * has to be exactly same as its counterpart in the backend even the String! or String 
 */

export const ADD_BOOK = gql`
mutation createBook($title: String!, $author: String!, $published: Int, $genres: [String!]) {
    addBook(
      title: $title,
      author: $author,
      published: $published,
      genres: $genres
    ) {
      title
      published
      author
      genres
      id
    }
  }
`