import React from 'react';
import { useSocket } from '../../context/SocketContext';

const Lobby: React.FC = () => {
  const socket = useSocket();

  if (socket) {
    console.log(`Socket ID: ${socket.id}`);
    socket.emit('joinRoom', 'room1');
  }
  
  return (
    <div>
      <h1>Lobby!</h1>
    </div>
  );
};

export default Lobby;