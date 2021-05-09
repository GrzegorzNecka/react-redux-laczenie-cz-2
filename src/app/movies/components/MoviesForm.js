import React from 'react';

const MoviesForm = () => {
  const movieInput = React.createRef();

  const addMovie = event => {
    event.preventDefault();
    console.log('form', movieInput.current.value);
  };

  return (
    <form onSubmit={addMovie}>
      <input ref={movieInput} />
      <button type="submit"> add movie</button>
    </form>
  );
};

export default MoviesForm;
