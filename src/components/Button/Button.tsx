import React, { useState } from 'react';
import './styles.scss';

type ButtonProps = {
  text: string;
  onClick?: () => Promise<void> | void; // Support async actions
  animated?: boolean;
};

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
      <div className="buttonContent">
        {text}
      </div>
      {loading && <div className="loader"></div>}
      {success && <div className="checkmark">✓</div>}
    </button>
  );
};

export default Button;