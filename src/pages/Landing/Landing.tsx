import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Input from '../../components/Input/Input';
import InputWatcher from '../../components/InputWatcher/InputWatcher';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const Landing: React.FC = () => {
  const [displayLogin, setDisplayLogin] = useState(false);
  const [displaySignup, setDisplaySignup] = useState(false);
  const [signupValues, setSignupValues] = useState({ 
    username: "",
    email: "", 
    password: "", 
    confirmPassword: "", 
    securityPrompt: "", 
    securityAnswer: "" 
  });
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: ""
  })

  const { setUsername } = useUser();

  const [hideBearImgs, setHideBearImgs] = useState<string[]>([]);
  const [watchBearImgs, setWatchBearImgs] = useState<string[]>([]);
  const [currentFocus, setCurrentFocus] = useState<"OTHER" | "PASSWORD" | "NONE">("NONE");

  const handleRegister = async () => {
    const { username, email, password, confirmPassword, securityPrompt, securityAnswer } = signupValues;

    // Basic validation (e.g., check if passwords match)
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Prepare the request body
    const requestBody = {
      username,
      email,
      password,
      securityPrompt,
      securityAnswer,
    };

    try {
      // Perform the POST request
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      // Parse the response
      const data = await response.json();

      // Handle the response
      if (response.ok) {
        console.log("User registered successfully:", data);
        setUsername(username);
        navigate('/home');
        // Optionally, you can redirect the user or update the UI
      } else {
        console.error("Registration failed:", data.message);
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  const handleLogin = async () => {
    const { email, password } = loginValues;

    const requestBody = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
        navigate('/home');
      } else {
        console.error("Login failed:", data.message);
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  const handleSignupChange = (field: keyof typeof signupValues, value: string) => {
    setSignupValues(prev => ({ ...prev, [field]: value }));
  };

  const handleLoginChange = (field: keyof typeof loginValues, value: string) => {
    setLoginValues(prev => ({ ...prev, [field]: value }));
  };

  const resetSignupValues = () => {
    setSignupValues({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      securityPrompt: "",
      securityAnswer: "",
    });
  };

  const resetLoginValues = () => {
    setLoginValues({
      email: "",
      password: "",
    });
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  const toggleSignup = () => {
    if (displaySignup) {
      resetSignupValues();
      setCurrentFocus("NONE");
    }
    setDisplaySignup(!displaySignup);
  };

  const toggleLogin = () => {
    if (displayLogin) {
      resetLoginValues();
      setCurrentFocus("NONE");
    }
    setDisplayLogin(!displayLogin);
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
      import.meta.glob("/src/assets/bear/watch_bear_*.png", { eager: true }),
      setWatchBearImgs
    );
    loadImages(
      import.meta.glob("/src/assets/bear/hide_bear_*.png", { eager: true }),
      setHideBearImgs
    );

  }, []);

  return (
    <>
      <div className={`${styles.header} ${displayLogin || displaySignup ? styles.blur : ''}`}>
        <div className={styles.title}>
          <p className={styles.title1}>IDLE</p>
          <p className={styles.title1}>ACES</p>
        </div>
        <div className={styles.tagline}>
          <h1 className={styles.desc}>Enjoy your favorite card games on your terms. Play with friends anytime, anywhere, at your own pace whenever it fits your schedule.</h1>
          <div className={styles.auth}>
            <Button
              text='Log in!'
              onClick={toggleLogin}
            />
            <Button
              text='Sign up!'
              onClick={toggleSignup}
            />
          </div>
        </div>
      </div>
      <Modal isOpen={displaySignup} onClose={toggleSignup} onClick={() => setCurrentFocus("NONE")}>
        <h2>Create an account</h2>
        <Input 
          id='username' 
          value={signupValues.username} 
          onChange={(e) => handleSignupChange("username", e.target.value)} 
          label='Username'
        />
        <Input 
          id='email' 
          value={signupValues.email} 
          onChange={(e) => handleSignupChange("email", e.target.value)} 
          label='Email'
        />
        <Input 
          id='password' 
          value={signupValues.password} 
          onChange={(e) => handleSignupChange("password", e.target.value)} 
          label='Password'
          type="password"
        />
        <Input 
          id='confirmPassword' 
          value={signupValues.confirmPassword} 
          onChange={(e) => handleSignupChange("confirmPassword", e.target.value)} 
          label='Confirm Password'
          type="password"
        />
        <Input 
          id='securityPrompt' 
          value={signupValues.securityPrompt} 
          onChange={(e) => handleSignupChange("securityPrompt", e.target.value)} 
          label='Security Prompt'
        />
        <Input 
          id='securityAnswer' 
          value={signupValues.securityAnswer} 
          onChange={(e) => handleSignupChange("securityAnswer", e.target.value)} 
          label='Security Answer' />
        <Button text='Submit' onClick={handleRegister} animated/>
      </Modal>
      <Modal 
        isOpen={displayLogin} 
        onClose={toggleLogin} 
        onClick={() => setCurrentFocus("NONE")}
      >
        <h2>Log in</h2>
        <InputWatcher
          focus={currentFocus}
          emailLength={loginValues.email.length}
          watchImgs={watchBearImgs}
          hideImgs={hideBearImgs}
        />
        <Input 
          id='email' 
          value={loginValues.email} 
          onFocus={() => setCurrentFocus("OTHER")}
          onChange={(e) => handleLoginChange("email", e.target.value)}
          label='Email'
        />
        <Input 
          id='password' 
          value={loginValues.password} 
          onFocus={() => setCurrentFocus("PASSWORD")}
          onChange={(e) => handleLoginChange("password", e.target.value)}
          label='Password'
          type="password"
        />
        <Button text='Submit' onClick={handleLogin} />
      </Modal>
    </>
  );
};

export default Landing;
