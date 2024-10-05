import React from 'react';
import './styles.css';

// Define the types for the props
interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;            // The label text
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className='button' onClick={onClick}>
          <p className='button-label'>
            {label}
          </p>
    </button>
  );
};

export default Button;
