import logo from './logo.svg';
import './App.css';
import React from 'react';
import Upload from './components/Upload';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <h1>Chatbot</h1>
      <upload/>
      <Chat />
    </div>
  );
}

export default App;
