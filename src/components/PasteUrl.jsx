import React, { useState } from 'react';

function PasteUrl() {
  const [showOptions, setShowOptions] = useState(false);

  const handleDropdownToggle = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="container">
      <div className="gradient-bar">
        <input
          type="text"
          placeholder="Paste URL here..."
          className="UrlPlace-bar"
        />
        <div className="domain-container">
          <div className="dropdown">
            <button className="dropdown-button" onClick={handleDropdownToggle}>
              Choose Domain ▼
            </button>
            {showOptions && (
              <div className={`dropdown-content ${showOptions ? 'show' : ''}`}>
                <button>Option A</button>
                <button>Option B</button>
                <button>Option C</button>
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Type Alias here"
            className="Alias-bar"
          />
        </div>
        <button className="trim-url-button">Trim URL</button>
        <p className="Terms-bar">
          By clicking TrimURL, I agree to the <strong>Terms of Service</strong>,
          Privacy Policy and Use of Cookies.
        </p>
      </div>
    </div>
  );
}

export default PasteUrl;
