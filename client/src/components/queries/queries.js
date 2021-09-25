import { gql } from '@apollo/client';

const getAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`

const getBooks = gql`
  {
    books{
      name,
      id
    }
  }
`

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`

const getBook = gql`
  query($id: ID){
    book(id: $id){
    id
    name
    genre
    author{
      id
      name
      age
      books{
        name
        id
      }
    }
  }
}
`

export { getAuthors, getBooks, addBookMutation, getBook };