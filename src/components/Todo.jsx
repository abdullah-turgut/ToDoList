import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function Todo(props) {
  const { getStoredData, setStoredData } = useLocalStorage();
  const { data, setData } = props;

  function handleClick(id) {
    let isCompleted;
    if (data.filter((item) => item.id == id)[0].status === false) {
      isCompleted = true;
    } else {
      isCompleted = false;
    }

    data.filter((item) => item.id == id)[0].status = isCompleted;
    setStoredData('data', data);
    setData(getStoredData('data'));
  }

  let elements = data.map((item, index) => (
    <p
      key={index}
      id={item.id}
      onClick={() => handleClick(item.id)}
      className="cursor-pointer"
    >
      - {item.name} {item.status && <span>&#10003;</span>}
    </p>
  ));

  return <div className="flex flex-col gap-2">{elements}</div>;
}

export default Todo;
