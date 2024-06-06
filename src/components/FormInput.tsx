import React, { useState } from 'react';

type FormInputProps = {
  type?: 'text' | 'email';
  label: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  textarea?: boolean;
};

export default function FormInput({
  type,
  label,
  name,
  placeholder,
  required,
  textarea,
}: FormInputProps) {
  const [error, setError] = useState('');
  const [value, setValue] = useState('');

  const handleChangeValue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;
    setValue(e.target.value);
    if (!newValue && required) {
      setError(`${label} is required`);
    } else {
      setError('');
    }
  };

  return (
    <div className="w-full mb-6 md:mb-0">
      <div className="flex gap-1 items-center mb-2">
        <label className="" htmlFor={name}>
          {label}
        </label>
        {error && (
          <p className="bg-danger text-xs italic ml-4 py-1 px-2 rounded">
            Please fill out this field.
          </p>
        )}
      </div>
      {textarea ? (
        <textarea
          className="appearance-none block w-full text-gray-700  rounded py-3 px-4 leading-tight focus:outline-primary"
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChangeValue}
          rows={5}
        />
      ) : (
        <input
          className="appearance-none block w-full text-gray-700  rounded py-3 px-4 leading-tight focus:outline-primary"
          id={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChangeValue}
        />
      )}
    </div>
  );
}
