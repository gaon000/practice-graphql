import { useQuery } from '@apollo/client';
import { getBook } from './queries/queries';

function BookDetails(props){
  const { loading, data, error } = useQuery(getBook, {
    variables: {
      id: props.bookId
    }
  });
  function displayBookDetails() {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
   const { book } = data;
   if(book) {
     console.log(book)
     return(
       <div>
         <h2>{book.name}</h2>
         <p>{book.genre}</p>
         <p>{book && book.author && book.author.name}</p>
         <p>All books by this author:</p>
         <ul className="other-books">
           { book && book.author && book.author.books.map(item => {
             return <li key={item.id}>{item.name}</li>
           })}
         </ul>
       </div>
     )
   } else{
     return(
       <div>No Book Selected...</div>
     )
   }
  }
  return (
    <div id="book-details">
    {displayBookDetails()}
    </div>
  );
}

export default BookDetails;

