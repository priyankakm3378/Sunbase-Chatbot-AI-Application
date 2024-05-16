import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSend = async () => {
    try {
      const res = await axios.post('/api/chat', { prompt });
      setResponse(res.data);
    } catch (error) {
      setResponse('Failed to get response.');
    }
  };

  return (
    <div>
      <h2>Chat with Bot</h2>
      <textarea
        value={prompt}
        onChange={handlePromptChange}
        rows="4"
        cols="50"
        placeholder="Enter your message here..."
      />
      <br />
      <button onClick={handleSend}>Send</button>
      <h3>Response:</h3>
      <p>{response}</p>
    </div>
  );
}

export default Chat;
