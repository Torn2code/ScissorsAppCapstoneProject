import React from 'react';

const Header = () => {
  return (
    <div className="head-bar">
      <div className="Sci-bar">
        <img src="Vector (3).svg" alt="" /> SCISSOR
      </div>
      <div className="My-bar">My URLs</div>
      <div className="head-list">
        Features <img src="Vector (4).svg" alt="" />
        <link className="vec-bar" rel="stylesheet" href="Vector.svg" />
      </div>
      <div className="head-list">Pricing</div>
      <div className="head-list">Analytics</div>
      <div className="head-list">FAQs</div>
      <div className="log-bar">Log in</div>
      <button className="Try-bar">Try for free</button>
    </div>
  );
};

export default Header;
