import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png'

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 40px 0;
  font-family: 'Arial', sans-serif;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 20%;
  margin-bottom: 15px;

  img {
    width: 150px;
    margin-right: 15px;
  }

  p {
    font-size: 14px;
    color: #aaa;
  }
`;

const FooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 1 75%;
  margin-bottom: 5%; /* Reduced gap to 5% for the last row */
`;

const FooterColumn = styled.div`
  flex: 1;
  margin-right: 20px;

  h4 {
    font-size: 16px;
    color: #ff6600;
    margin-bottom: 10px;
    font-weight: bold; /* Bold letters for headings */
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 8px;
  }

  ul li a {
    text-decoration: none;
    color: #ddd;
    font-size: 14px;
    transition: color 0.3s ease;
    font-weight: bold; /* Bold letters for links */
  }

  ul li a:hover {
    color: #ff6600;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo and Description */}
        <LogoSection>
          <img src={Logo} alt="Ultrapro Logo" />
          <p>The Ultrapro Blockchain is a global, decentralized network with developers</p>
        </LogoSection>

        {/* Navigation Columns */}
        <FooterColumns>
          <FooterColumn>
            <h4>Explore</h4>
            <ul>
              <li><a href="#">UPRO Explorer</a></li>
              <li><a href="#">Exchange</a></li>
              <li><a href="#">Wallet</a></li>
              <li><a href="#">DeFi</a></li>
              <li><a href="#">Payments</a></li>
              <li><a href="#">NFT</a></li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h4>Build</h4>
            <ul>
              <li><a href="#">Expo</a></li>
              <li><a href="#">Whitepaper</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Token</a></li>
              <li><a href="#">Staking</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h4>Community</h4>
            <ul>
              <li><a href="#">Save Crypto</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Youtube</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">Medium</a></li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h4>About</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </FooterColumn>
        </FooterColumns>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
