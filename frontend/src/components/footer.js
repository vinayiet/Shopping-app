import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={companyInfoStyle}>
        <h3>Your Company Name</h3>
        <p>123 Company Street, Cityville, Country</p>
        <p>Email: info@yourcompany.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div style={socialMediaStyle}>
        <h3>Connect With Us</h3>
        <ul style={socialListStyle}>
          <li>
            <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const companyInfoStyle = {
  flex: 1,
};

const socialMediaStyle = {
  flex: 1,
};

const socialListStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'space-around',
};

export default Footer;
