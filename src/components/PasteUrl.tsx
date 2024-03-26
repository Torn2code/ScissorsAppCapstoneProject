import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

interface PasteUrlProps {
  onUrlShortened: (shortUrl: string) => void;
}

const PasteUrl: React.FC<PasteUrlProps> = ({ onUrlShortened }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [longUrl, setLongUrl] = useState("");
  const [shortUrls, setShortUrls] = useState<string[]>([]);
  const [alias, setAlias] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            Authorization: "Bearer 0ea82b65323793d20f55c962146ccc699dba62dd",
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
        setShortUrls([...shortUrls, shortUrl]);
        onUrlShortened(shortUrl);
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
      <div className="PastedUrl-div">
        <div className="Paste-div">
          <input
            type="text"
            placeholder="Paste URL here..."
            className="UrlPlace-bar"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </div>

        <div className="dropdown" ref={dropdownRef}>
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

        <div className="Trim-div">
          <button className="trim-url-button" onClick={trimUrl}>
            Trim URL
            <img
              width="23"
              height="24"
              src="https://img.icons8.com/color/48/fantasy.png"
              alt="fantasy"
              style={{ marginLeft: "3px", marginBottom: "-10px" }}
            />
          </button>
        </div>

        {shortUrls.map((url, index) => (
          <div key={index} className="shortUrl">
            <p>Shortened URL {index + 1}: {url}</p>
          </div>
        ))}
        <div className="Terms-bar">
          By Clicking TrimURL, I agree to the{" "}
          <strong>Terms of Service, Privacy Policy </strong>
          and <strong>Use of Cookies</strong>
        </div>
      </div>
    </div>
  );
};

export default PasteUrl;
