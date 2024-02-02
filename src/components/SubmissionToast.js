import React, { useState, useEffect } from 'react';
import './SubmissionToast.css'; // Create a CSS file for styling

const SubmissionToast = ({ message, success }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the toast after 3000 milliseconds (adjust as needed)
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`custom-toast ${success ? 'success' : 'error'} ${isVisible ? 'visible' : ''}`}>
      {message}
    </div>
  );
};

export default SubmissionToast;
