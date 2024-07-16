
import React, { useRef } from 'react';
import "./Return.css";

import emailjs from '@emailjs/browser';
emailjs.init('your_emailjs_user_id');


const ReturnSection = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wg3y16d', 'template_mbso9xd', form.current, {
        publicKey: 'Z39N3_cDaDEqpcpty',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("email sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 
  return (
    <div className='mail-1'>
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_Email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  </div>
  );
};

export default ReturnSection;

// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: 'card',
//         card: cardElement,
//       });

//       if (error) {
//         setError(error.message);
//       } else {
//         // Send paymentMethod.id to your server to complete the payment
//         console.log('Payment Method:', paymentMethod);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default PaymentForm;
