
import React, { useState } from 'react';
import "./Return.css";

const ReturnSection = () => {
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Submitted:', { reason, description });
  
    setReason('');
    setDescription('');
  };

  return (
    <div>
      <h2>Product Return Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Reason for Return:</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Additional Details:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit Return</button>
      </form>
    </div>
  );
};

export default ReturnSection;


