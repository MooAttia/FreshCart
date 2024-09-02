import React from 'react';
import { Link } from 'react-router-dom';
import style from './Notfound.module.css';

export default function Notfound() {
  return (
    <div className={style.notFoundContainer}>
      <div className={style.notFoundContent}>
        <h1 className={style.notFoundTitle}>Oops! Page not found.</h1>
        <p className={style.notFoundText}>
          The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <Link to="/" className={style.homeButton}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
