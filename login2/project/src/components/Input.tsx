import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const inputStyles = `px-3 py-2 bg-white border ${
    error ? 'border-red-500' : 'border-gray-300'
  } rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black`;

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <div className={`mb-4 ${widthStyles}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        className={`${inputStyles} ${widthStyles} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;