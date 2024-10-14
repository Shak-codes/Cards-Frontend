import React from 'react';
import './styles.scss';

// Define the types for the props
interface InputProps {
  id: string;               // The id for the input and label
  value: string;            // The value of the input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // The onChange handler for the input
  label: string;            // The label text
}

const Input: React.FC<InputProps> = ({ id, value, onChange, label }) => {
  return (
    <div className="input-container">
      <input 
        type="text" 
        id={id} 
        className={`rounded-input ${value ? 'active' : ''}`}
        value={value} 
        onChange={onChange} 
      />
      <label 
        htmlFor={id} 
        className={`input-label ${value ? 'active' : ''}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
