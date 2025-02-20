import React, { useState } from 'react';
import './styles.scss';

type ButtonProps = {
  text: string;
  onClick?: () => Promise<void> | void; // Support async actions
  animated?: boolean;
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
  animated
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = async () => {
    if (onClick && animated) {
      setLoading(!loading);
      await onClick();
      setLoading(false);
      setSuccess(true);
      return;
    } else if (onClick) await onClick();
  };
  return (
    <button
      onClick={handleClick}
      className={`button ${loading ? 'loading' : ''}${success ? 'success' : ''}`}
    >
      <div className="button-content">
        {text}
      </div>
      {loading && <div className="loader"></div>}
      {success && <div className="checkmark">✓</div>}
    </button>
  );
};

export default Button;