import { useQuery } from '@apollo/client';
import BookDetails from './BookDetails';
import { getBooks } from './queries/queries';
import { useState } from 'react';

function BookList(props){
  const [selected, setState] = useState(null);
  const { loading, error, data } = useQuery(getBooks);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <ul id="book-list">
        {data.books.map(book=> (
          <li key={book.id} onClick={ (e) => {setState(book.id)}}>{book.name}</li>
        ))}
      </ul>
      <BookDetails bookId={ selected } />
    </div>
  );
}

export default BookList;