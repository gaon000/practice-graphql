import { useQuery, gql } from '@apollo/client';
import { getAuthors } from './queries/queries';

function AddBook(){
  const { loading, error, data } = useQuery(getAuthors);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);
  return (
    <form id="add-book">

    <div className="field">
      <label>Book name:</label>
      <input type="text"/>
    </div>
    
    <div className="field">
      <label>Genre:</label>
      <input type="text"/>
    </div>

    <div className="field">
      <label>Author:</label>
      <select>
        <option>Select Author</option>
        {data.authors.map(author => {
          return ( <option key={author.id} value={author.id}>{author.name}</option> )
        })}
      </select>
    </div>

    <button>+</button>

    </form>
  );
}

export default AddBook;
