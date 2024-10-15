import React from 'react';
import './styles.scss';

interface InputProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
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
