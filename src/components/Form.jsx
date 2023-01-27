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
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let item = { ...data, id: nanoid(3), status: false };
    let updatedStoredData = [...getStoredData('data'), item];
    setStoredData('data', updatedStoredData);
    setData(getStoredData('data'));
  };
  //   console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex">
      <div>
        <input
          type="text"
          placeholder="Task name"
          {...register('name', {
            required: 'Please type at least 1 character!',
            minLength: 1,
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default Form;
