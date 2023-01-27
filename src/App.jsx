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
    <div className="h-screen w-full bg-slate-300 flex justify-center pt-12">
      <main className="flex flex-col gap-8">
        <h1>Todo App</h1>
        <Todos data={data} setData={setData} />
        <Form localData={data} setData={setData} />
        <button onClick={toogleHide}>
          {hide ? 'Show All' : 'Hide Completed'}
        </button>
      </main>
    </div>
  );
}

export default App;
