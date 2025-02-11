import React from 'react';
import './styles.scss';

interface InputProps {
  id: string;
  value: string;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Input: React.FC<InputProps> = ({ id, value, onFocus, onChange, label }) => {
  return (
    <div className="input-container">
      <input 
        type="text" 
        id={id} 
        className={`rounded-input ${value ? 'active' : ''}`}
        value={value} 
        onFocus={onFocus}
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
