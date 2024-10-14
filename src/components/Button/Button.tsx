import React from 'react';
import './styles.css';

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

// const StyledButton = styled.button<ButtonProps>`
//   border-radius: ${({ borderRadius }) => borderRadius || '4px'};
//   border: 2px solid ${({ outlineColor }) => outlineColor || '#000'};
//   color: ${({ textColor }) => textColor || '#000'};
//   background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
//   padding: 10px 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, color 0.3s ease;

//   &:hover {
//     background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || '#fff'};
//     color: ${({ hoverTextColor }) => hoverTextColor || '#000'};
//   }
// `;

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <button onClick={onClick} className='button'>
      {text}
    </button>
  );
};

export default Button;