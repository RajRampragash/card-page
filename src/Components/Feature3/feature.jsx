import React from 'react';
import './style.css';
import PaymentIcon from '@mui/icons-material/Payment';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
const Feature3 = () => {
 return (
    <div className="card-container">
      <div className="card">
        <div className="card-top">
          <p>Unlock Limitless Possibilities with our New Card Solutions</p>
        </div>
        <div className="card-bottom">
          <button>Unlock your card <PaymentIcon/></button> <button>Customer support<HeadsetMicIcon/></button>
        </div>
      </div>
    </div>
 );
};

export default Feature3;