import { useQuery, useMutation } from '@apollo/client';
import { getAuthors, addBookMutation, getBooks } from './queries/queries';
import React, {useState} from "react";

function AddBook(props){
  const [state, setState] = useState({
    name: '',
    genre: '',
    authorId: ''
  }
  );
  const { loading, error, data } = useQuery(getAuthors);
  const [addBookMut] = useMutation(addBookMutation);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  function submitForm(e){
    e.preventDefault();
    addBookMut({
      variables: {
        name: state.name,
        genre: state.genre,
        authorId: state.authorId
      },
      refetchQueries: [getBooks]
    });
    console.log(state);
  }

  return (
    <form id="add-book" onSubmit={submitForm}>
    
    <div className="field">
      <label>Book name:</label>
      <input type="text" onChange={(e) => setState(prevState => ({
        ...prevState,
        name: e.target.value
      }))}/>
    </div>
    
    <div className="field">
      <label>Genre:</label>
      <input type="text" onChange={(e) => setState(prevState => ({
        ...prevState,
        genre:e.target.value
      }))} />
    </div>

    <div className="field">
      <label>Author:</label>
      <select onChange={(e) => setState(prevState => ({
        ...prevState,
        authorId:e.target.value
      }))}>
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
