import { Button, Input, Textarea } from '@material-tailwind/react';
import React, { useState } from 'react'

const MessageAdmin = () => {
  const CHARACTER_LIMIT = 100;

  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);

  const [formData, setFormData] = useState({
    mobileNumber: "",
    message: "",
  });

  const { mobileNumber, message } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else {
   
      // TODO: Enter code here
    }
  };

  return (
    <div className='communication'>
      <div className='whatsapp-card app'>
        <div className='title flex_middle'>
          <div style={{ marginRight: "0.5em" }}>
           
          </div>
          <div>Send Message</div>
        </div>
        {numberEmptyError && (
          <div className='errors'>Mobile number cannot be empty!</div>
        )}
        {messageEmptyError && (
          <div className='errors'>Message cannot be empty!</div>
        )}
        {!numberEmptyError && !messageEmptyError && (
          <div className='errors-null'>.</div>
        )}
        <div className='search_contact app'>
          <Input
            error={numberEmptyError}
            label='Mobile Number'
            placeholder='Mobile Number'
            name='mobileNumber'
            value={mobileNumber}
            onChange={onChange}
            size='small'
          
            required
          />
        </div>
        <div className='message app' style={{ marginTop: "1.5em" }}>
          <Textarea
            multiline
            maxRows={4}
            label='Message'
            placeholder='Hi! Sending a message from React....'
            size='small'
           
            name='message'
            value={message}
            onChange={onChange}
            required
            error={message.length > CHARACTER_LIMIT - 1 || messageEmptyError}
            helperText={
              !(message.length > CHARACTER_LIMIT - 1)
                ? `${message.length}/${CHARACTER_LIMIT}`
                : "Max length exceeded"
            }
          />
        </div>
        <div style={{ marginTop: "1.5em" }}>
          <Button
            onClick={onSubmit}
            variant='outlined'
            color='success'
            size='small'
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};
export default MessageAdmin