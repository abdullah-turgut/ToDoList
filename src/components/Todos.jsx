import React from 'react';
import Todo from './Todo';

function Todos(props) {
  const { data, setData } = props;
  return (
    <div>
      <h3>Todos:</h3>
      <Todo data={data} setData={setData} />
    </div>
  );
}

export default Todos;
