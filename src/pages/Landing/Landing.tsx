import React, { useState } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as BGPattern } from '../../assets/background/animatedbackground.svg';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Input from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';
import '../../assets/background/bg.scss'

const Landing: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [verifyPassword, setVerifyPassword] = useState<string>('');
  const [securityPrompt, setSecurityPrompt] = useState<string>('');
  const [securityAnswer, setSecurityAnswer] = useState<string>('');

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleVerifyPassword = (e: React.ChangeEvent<HTMLInputElement>) => setVerifyPassword(e.target.value);
  const handleSecurityPrompt = (e: React.ChangeEvent<HTMLInputElement>) => setSecurityPrompt(e.target.value);
  const handleSecurityAnswer = (e: React.ChangeEvent<HTMLInputElement>) => setSecurityAnswer(e.target.value);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

    const openSignup = () => {
    setIsSignupOpen(true);
  };

  const closeSignup = () => {
    setIsSignupOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.header} ${isLoginOpen || isSignupOpen ? styles.blur : ''}`}>
        <BGPattern className={`${styles.bg} ${isLoginOpen || isSignupOpen ? styles.blur : ''}`}/>
        <div className={styles.title}>
          <p className={styles.title1}>CARD</p>
          <p className={styles.title2}>GAMES</p>
        </div>
        <div className={styles.tagline}>
          <h1 className={styles.desc}>Enjoy your favorite card games on your terms. Play with friends anytime, anywhere, at your own pace whenever it fits your schedule.</h1>
          <div className={styles.auth}>
            <Button
              text='Log in!'
              onClick={openLogin}
            />
            <Button
              text='Sign up!'
              onClick={openSignup}
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isSignupOpen} onClose={closeSignup}>
        <h2>Create an account</h2>
        <Input id='username' value={username} onChange={handleUsername} label='Username'/>
        <Input id='email' value={email} onChange={handleEmail} label='Email'/>
        <Input id='password' value={password} onChange={handlePassword} label='Password' />
        <Input id='verifyPassword' value={verifyPassword} onChange={handleVerifyPassword}  label='Verify Password' />
        <Input id='securityPrompt' value={securityPrompt} onChange={handleSecurityPrompt} label='Security Prompt' />
        <Input id='securityAnswer' value={securityAnswer} onChange={handleSecurityAnswer} label='Security Answer' />
        <Button text='Submit' onClick={closeSignup} />
      </Modal>
      <Modal isOpen={isLoginOpen} onClose={closeLogin}>
        <h2>Log in</h2>
        <Input id='email' value={email} onChange={handleEmail} label='Email'/>
        <Input id='password' value={password} onChange={handlePassword} label='Password' />
        <Button text='Submit' onClick={goToHome} />
      </Modal>
    </div>
  );
};

export default Landing;
