import React, { useState } from 'react';

const EventPracticeF = () => {
  
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  
  const { username, message } = form;
  
  const onChange = e => {
    const nextFrom = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextFrom);
  };
  
  const onClick = () => {
    alert(username + ' : ' + message);
    setForm({
      username: '',
      message: ''
    });
  };

  const onKeyPress = e => {
    if(e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event Practice Functional</h1>
      <input
        type="text"
        name="username"
        placeholder="Type name"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="Type Anything"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>check!</button>
    </div>
  );
};

export default EventPracticeF;