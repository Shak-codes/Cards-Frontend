import React, { useState } from 'react';
import './styles.scss';
import { ReactComponent as BGPattern } from '../../assets/background/animatedbackground.svg';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

const Landing: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='container'>
      <BGPattern className={`bg ${isModalOpen ? 'blur' : ''}`}>
      </BGPattern>
      <div className={`header ${isModalOpen ? 'blur' : ''}`}>
        <div className='title'>
          <p className="title1">CARD</p>
          <p className="title2">GAMES</p>
        </div>
        <div className='tagline'>
          <h1 className="desc">Enjoy your favorite card games on your terms. Play with friends anytime, anywhere, at your own pace whenever it fits your schedule.</h1>
          <div className='auth'>
            <Button
              text='Log in!'
              onClick={openModal}
            />
            <Button
              text='Sign up!'
              onClick={() => alert('Button clicked!')}
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the modal content. You can place any content here!</p>
      </Modal>
    </div>
  );
};

export default Landing;
