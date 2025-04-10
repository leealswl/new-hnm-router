import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 쇼핑몰 정보 영역 */}
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Welcome to our shopping mall. We offer a wide range of products for all your needs.
          </p>
        </div>

        {/* 고객 서비스 영역 */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* SNS 및 팔로우 영역 */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-media">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Shopping Mall. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
