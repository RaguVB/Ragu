// Checkout.js

import React, { useState } from 'react';
import './checkout.css';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  /*const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');*/




  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    PhoneNumber: '',
    StreetAddress: '',
    City: '',
    State: '',
    ZIPcode: '',
    Country: '',
  });
  const [isOrderAccepted, setIsOrderAccepted] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.Name === '' ||
      formData.email === '' ||
      formData.PhoneNumber === '' ||
      formData.StreetAddress === ''||
      formData.City === '' ||
      formData.State === '' ||
      formData.ZIPcode === '' ||
      formData.Country === ''


    ) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Registration successful!', formData);
    setIsOrderAccepted(true);
    // Reset form data if needed
    setFormData({
      Name: '',
      email: '',
      PhoneNumber: '',
      StreetAddress: '',
      City: '',
      State: '',
      ZIPcode: '',
      Country: '',
    });

  };





  
  /*const handleCheckout = () => {
    // Perform your checkout logic here
    // You can send the form data to an API or take any necessary actions

    // For demonstration purposes, let's log the form data to the console
    console.log('Checkout Data:', {
      firstName,
      lastName,
      email,
      address,
    });

    // You can also navigate to a confirmation page or perform other actions
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleCheckout}>
          Place Order
        </button>
      </form>
    </div>
  );
  */
  return (
    <div className="box">
        


        <style>
        {`
          .form-box {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
          }
          h1{
            color:#1F4F09;
            font-family:Sitka Small Semibold;
            font-size:large;
          }
          h3{
            font-size:40px;
            color:#1F4F09;
            text-align:center;
            font-family:Cooper Black;
          }
        `}
      </style>


      <span className="text-center">Order Details Here...</span>

        {isOrderAccepted ? (
        <div>
          <h3>Order Accepted!</h3>
          {/* Additional content or redirection logic can be added here */}
        </div>
      ) : (
        <form className="form-box" onSubmit={handleSubmit}>
            
      
        <div className="input-container">
          <input
            type="text"
            id="one"
            name="Name"
            placeholder="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            id="two"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="number"
            name="PhoneNumber"
            placeholder="Phone Number"
            value={formData.PhoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="StreetAddress"
            placeholder="Address"
            value={formData.StreetAddress}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="City"
            placeholder="City"
            value={formData.City}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="State"
            placeholder="State"
            value={formData.State}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="ZIPcode"
            placeholder="ZIP CODE"
            value={formData.ZIPcode}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="Country"
            placeholder="country"
            value={formData.Country}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
            <h1>Free Shipping </h1>
        </div>
        <div className="input-container">
            <h1><u>Payments Available:</u></h1>
            <br></br>
            <h2>Cash On Delivery</h2><br></br>
            <a href="https://paytm.com/" target="_blank" rel="noopener noreferrer">Online Payment</a>
            
        </div>
        
        <input type="submit" value="Place Your Order" className="btn" onClick={handleChange}/>
        
            
      </form>
      )}
    </div>

  );
};

export default Checkout;
