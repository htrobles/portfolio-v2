import React, { useEffect, useState } from 'react';

type FormInputProps = {
  type?: 'text' | 'email';
  label: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  textarea?: boolean;
  onChange?: (value: string) => any;
  value?: string;
};

function isValidEmail(value?: string): boolean {
  if (!value) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export default function FormInput({
  type,
  label,
  name,
  placeholder,
  required,
  textarea,
  onChange,
  value,
}: FormInputProps) {
  const [error, setError] = useState('');

  useEffect(() => {
    if (required && !value) {
      setError(`* Required`);
    } else if (type === 'email' && !isValidEmail(value)) {
      setError('* Valid email address is required');
    } else {
      setError('');
    }
  }, [value]);

  return (
    <div className="w-full mb-6 md:mb-0">
      <div className="flex gap-1 items-center mb-2">
        <label className="" htmlFor={name}>
          {label}
        </label>
        {error && (
          <p className="bg-danger text-xs italic ml-1 py-1 px-2 rounded">
            {error}
          </p>
        )}
      </div>
      {textarea ? (
        <textarea
          className="appearance-none block w-full text-gray-700  rounded py-3 px-4 leading-tight focus:outline-primary-500"
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          rows={5}
        />
      ) : (
        <input
          className="appearance-none block w-full text-gray-700  rounded py-3 px-4 leading-tight focus:outline-primary-500"
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      )}
    </div>
  );
}
