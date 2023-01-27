import React from 'react';
import Todo from './Todo';

function Todos(props) {
  const { data, setData } = props;
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl text-rose-800">Todos:</h3>
      <Todo data={data} setData={setData} />
    </div>
  );
}

export default Todos;
