import React from "react";
import "../ScissorsApp.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <h1> SCISSOR </h1>

        <div className="social-logo">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/50/x-coordinate.png"
            alt="x-coordinate"
          />{" "}
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios/50/instagram-new--v1.png"
            alt="instagram-new--v1"
          />{" "}
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-filled/50/linkedin.png"
            alt="linkedin"
          />{" "}
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios-glyphs/30/facebook.png"
            alt="facebook"
          />{" "}
        </div>
      </div>

      <div className="foot-grid">
        <div className="under-grid">
          <p>Why Scissor ?</p>
          <p className="mid-grid">Scissor 101</p>
          <p className="mid-grid">Integrations & API</p>
          <p className="mid-grid">Pricing</p>
        </div>
        <div className="under-grid">
          <p>Solutions</p>
          <p className="mid-grid">Social Media</p>
          <p className="mid-grid">Digital Marketing</p>
          <p className="mid-grid">Customer Service</p>
          <p className="mid-grid">For Developers</p>
        </div>
        <div className="under-grid">
          <p>Products</p>
          <p className="mid-grid">Link Management</p>
          <p className="mid-grid">QR Codes</p>
          <p className="mid-grid">Link-in-bio</p>
        </div>
        <div className="under-grid">
          <p>Company</p>
          <p className="mid-grid">About Scissor</p>
          <p className="mid-grid">Careers</p>
          <p className="mid-grid">Partners</p>
          <p className="mid-grid">Press</p>
          <p className="mid-grid">Contact</p>
          <p className="mid-grid">Reviews</p>
        </div>
      </div>
      <div className="empty-grid">
        <div className="under-grid">
          <p>Resources</p>
          <p className="mid-grid">Blog</p>
          <p className="mid-grid">Resource Library</p>
          <p className="mid-grid">Developers</p>
          <p className="mid-grid">App Connectors</p>
          <p className="mid-grid">Support</p>
          <p className="mid-grid">Trust Center</p>
          <p className="mid-grid">Browser Extension</p>
          <p className="mid-grid">Mobile App</p>
        </div>
        <div className="under-grid">
          <p>Features</p>
          <p className="mid-grid">Branded Links</p>
          <p className="mid-grid">Mobile Links</p>
          <p className="mid-grid">Campaign</p>
          <p className="mid-grid">App Connectors</p>
          <p className="mid-grid">Management & Analytics</p>
          <p className="mid-grid">QR Code generation</p>
        </div>
        <div className="under-grid">
          <p>Legal</p>
          <p className="mid-grid">Privacy Policy</p>
          <p className="mid-grid">Cookie Policy</p>
          <p className="mid-grid">Terms of Service</p>
          <p className="mid-grid">Acceptable Use Policy</p>
          <p className="mid-grid">Code of Conduct</p>
        </div>
      </div>
      <div className="last-bar">
        <h4>
          Term of Service
          <img src="Vector 6 (1).svg" alt="" />
          Security
          <img src="Vector 6 (1).svg" alt="" />ⓒ Scissor 2023
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
