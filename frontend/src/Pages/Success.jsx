import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timer);
          navigate('/');
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <section className="notFound">
      <div className="container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="120"
          height="120"
          style={{ margin: '0 auto 2rem', display: 'block' }}
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="#28a745" stroke-width="5" />
          <path
            d="M 30 50 L 45 65 L 70 35"
            fill="none"
            stroke="#28a745"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 style={{ marginBottom: '1rem' }}>RESERVATION SUCCESSFUL!</h1>
        <p style={{ fontSize: '20px' }}>
          Your table reservation request has been processed successfully.
        </p>
        <p style={{ fontSize: '18px', color: '#ff6b35', fontWeight: '400', marginBottom: '2.5rem' }}>
          Redirecting you to the home page in {countdown} seconds...
        </p>
        <Link to="/">
          Back to Home{' '}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Success;
