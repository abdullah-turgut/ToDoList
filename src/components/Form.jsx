import React from 'react';
import { useForm } from 'react-hook-form';
import useLocalStorage from '../hooks/useLocalStorage';
import { nanoid } from 'nanoid';

function Form(props) {
  const { getStoredData, setStoredData } = useLocalStorage();
  const { setData } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let item = { ...data, id: nanoid(3), status: false };
    let updatedStoredData = [...getStoredData('data'), item];
    setStoredData('data', updatedStoredData);
    setData(getStoredData('data'));
    reset({
      name: '',
    });
  };
  //   console.log(errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-4 justify-center items-center"
      >
        <div>
          <input
            type="text"
            placeholder="Task name"
            className="px-2 py-1 rounded-lg focus:rounded-[0px] outline-none border-2 border-gray-400"
            {...register('name', {
              required: 'Please type at least 1 character!',
              minLength: 1,
            })}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className="bg-gray-400 py-1 px-3 rounded-lg"
          />
        </div>
      </form>
      {errors.name && (
        <p className="text-red-700 text-sm mt-1">{errors.name.message}</p>
      )}
    </div>
  );
}

export default Form;
