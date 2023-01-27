import { useState } from 'react';
//Helpers
import useLocalStorage from './hooks/useLocalStorage';
//Components
import Todos from './components/Todos';
import Form from './components/Form';

function App() {
  const { getStoredData, setStoredData } = useLocalStorage();
  const [data, setData] = useState(getStoredData('data'));
  const [hide, setHide] = useState(false);

  function toogleHide() {
    let len = getStoredData('data').filter((item) => item.status).length;
    len > 0 && setHide(!hide);
    hide
      ? setData(getStoredData('data'))
      : setData(getStoredData('data').filter((item) => !item.status));
  }

  return (
    <div className=" w-full flex justify-center pt-12 ">
      <main className="flex flex-col gap-8 shadow-[0_0_500px_gray]  px-4 py-8 rounded-2xl">
        <h1 className="text-center text-4xl text-rose-800">Todo App</h1>
        <Todos data={data} setData={setData} />
        <Form localData={data} setData={setData} />
        <button
          onClick={toogleHide}
          className="bg-gray-400 w-fit mx-auto py-1 px-4 rounded-lg cursor-pointer"
        >
          {hide ? 'Show All' : 'Hide Completed'}
        </button>
      </main>
    </div>
  );
}

export default App;
