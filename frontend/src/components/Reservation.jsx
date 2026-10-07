import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { reservationApi } from '../api/apiInstance';

const Reservation = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !date || !time) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }
    
    const loadingToast = toast.loading("Sending your reservation request...");
    try {
      const { data } = await reservationApi({ firstName, lastName, email, phone, date, time });
      toast.success(data.message, { id: loadingToast });
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('');
      navigate('/success');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong. Please try again.', { id: loadingToast });
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="Dining Table Reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1 style={{color:"red"}}>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call +1-234-567-890</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button type="submit">
                RESERVE NOW{' '}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
