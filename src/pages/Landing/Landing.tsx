import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Input from '../../components/Input/Input';
import InputWatcher from '../../components/InputWatcher/InputWatcher';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../../assets/background/AnimatedBackground';
import BearImg from '../../assets/bear/watch_bear_1.png'

const Landing: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [username, setUsername] = useState<string>('');

  const [hideBearImgs, setHideBearImgs] = useState<string[]>([]);
  const [watchBearImgs, setWatchBearImgs] = useState<string[]>([]);
  const [values, setValues] = useState({ email: "", password: "" });
  const [currentFocus, setCurrentFocus] = useState<"OTHER" | "PASSWORD" | "NONE">("NONE");

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);

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

  useEffect(() => {
    // Function to load images and sort them
    const loadImages = (
      glob: Record<string, { default: string }>,
      setState: (imgs: string[]) => void
    ) => {
      setState(
        Object.values(glob)
          .map((asset) => asset.default)
          .sort((a, b) => {
            const numA = parseInt(a.match(/(\d+)\.png$/)?.[1] || "0", 10);
            const numB = parseInt(b.match(/(\d+)\.png$/)?.[1] || "0", 10);
            return numA - numB;
          })
      );
    };

    // Example usage to load "watch" and "hide" images
    loadImages(
      import.meta.glob("../../assets/bear/watch_bear_*.png", { eager: true }),
      setWatchBearImgs
    );
    loadImages(
      import.meta.glob("../../assets/bear/hide_bear_*.png", { eager: true }),
      setHideBearImgs
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.header} ${isLoginOpen || isSignupOpen ? styles.blur : ''}`}>
        {/*<BGPattern className={`${styles.bg} ${isLoginOpen || isSignupOpen ? styles.blur : ''}`}/>*/}
        <AnimatedBackground className={`${styles.bg} ${isLoginOpen || isSignupOpen ? styles.blur : ''}`}/>
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
        {/* <Input id='securityPrompt' value={securityPrompt} onChange={handleSecurityPrompt} label='Security Prompt' />
        <Input id='securityAnswer' value={securityAnswer} onChange={handleSecurityAnswer} label='Security Answer' />
        <Button text='Submit' onClick={closeSignup} /> */}
      </Modal>
      <Modal isOpen={isLoginOpen} onClose={closeLogin}>
        <h2>Log in</h2>
        <InputWatcher
          focus={currentFocus}
          emailLength={values.email.length}
          watchImgs={watchBearImgs}
          hideImgs={hideBearImgs}
        />
        <Input 
          id='email' 
          value={values.email} 
          onFocus={() => setCurrentFocus("OTHER")}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          label='Email'/>
        <Input 
          id='password' 
          value={values.password} 
          onFocus={() => setCurrentFocus("PASSWORD")}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          label='Password' />
        <Button text='Submit' onClick={goToHome} />
      </Modal>
    </div>
  );
};

export default Landing;
