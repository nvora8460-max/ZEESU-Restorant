import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <img src="/notFound.svg" alt="Page Not Found" />
        <h1>PAGE NOT FOUND</h1>
        <p>We look like we've lost our way! The page you are looking for doesn't exist or has been moved.</p>
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

export default NotFound;
