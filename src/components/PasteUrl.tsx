import React, { useState } from "react";
import axios from "axios";

function PasteUrl() {
  const [showOptions, setShowOptions] = useState(false);
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [alias, setAlias] = useState("");

  const handleDropdownToggle = () => {
    setShowOptions(!showOptions);
  };

  const shortenUrl = async (longUrl: string) => {
    try {
      const response = await axios.post(
        "https://api-ssl.bitly.com/v4/shorten",
        {
          long_url: longUrl,
          domain: "bit.ly",
          custom_bitlink: alias,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer c701502d049d8f2f09ef2fca084fde462941e0d5",
          },
        }
      );
      return response.data.link;
    } catch (error) {
      console.error("Error shortening URL:", error);
      return null;
    }
  };

  const trimUrl = async () => {
    if (longUrl) {
      const shortUrl = await shortenUrl(longUrl);
      if (shortUrl) {
        console.log("Shortened URL:", shortUrl);
        setShortUrl(shortUrl);
      } else {
        console.error("Failed to shorten URL");
      }
    }
  };

  const handleAliasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlias(e.target.value);
  };

  return (
    <div id="gradient-bar" className="gradient-bar">
      <div className="Paste-div">
        <input
          type="text"
          placeholder="Paste URL here..."
          className="UrlPlace-bar"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
      </div>

      <div className="dropdown">
        <button className="dropdown-button" onClick={handleDropdownToggle}>
          Choose Domain ▼
        </button>
        {showOptions && (
          <div className={`dropdown-content ${showOptions ? "show" : ""}`}>
            <button>Option A</button>
            <button>Option B</button>
            <button>Option C</button>
          </div>
        )}
      </div>

      <div className="Alias-div">
        <input
          type="text"
          placeholder="Type Alias here"
          className="Alias-bar"
          value={alias}
          onChange={handleAliasChange}
        />
      </div>

      <div>
        <button className="trim-url-button" onClick={trimUrl}>
          Trim URL
          <img
            width="23"
            height="24"
            src="https://img.icons8.com/color/48/fantasy.png"
            alt="fantasy"
            style={{ marginLeft: "3px" }}
          />
        </button>
      </div>

      {shortUrl && (
        <div className="shortUrl">
          <p>Shortened URL: {shortUrl}</p>
        </div>
      )}
      <div className="Terms-bar">
        By signing in with an account, you agree to scissor's{" "}
        <strong>Terms of Service, Privacy Policy </strong>
        and <strong>Acceptable Use Policy</strong>
      </div>
    </div>
  );
}

export default PasteUrl;
