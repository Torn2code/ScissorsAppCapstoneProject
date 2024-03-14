import React, { useState } from "react";
import QRCode from "qrcode.react";

const Qrcode = () => {
  const [url, setUrl] = useState("");
  const [generatedQrCode, setGeneratedQrCode] = useState("");

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const generateQRCode = () => {
    if (url.trim() !== "") {
      setGeneratedQrCode(url);
    } else {
      alert("Please enter a valid URL to generate QR code.");
    }
  };

  return (
    <div>
      <h1 className="Gen-head">Generate QR Code</h1>
      <div>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={handleUrlChange}
        />
        <button className="Gen-button" onClick={generateQRCode}>
          Generate QR Code
        </button>
      </div>
      {generatedQrCode && (
        <div>
          <h2 className="Gene-bar">Here You Go</h2>
          <QRCode value={generatedQrCode} />
          <p>URL: {generatedQrCode}</p>
          <a
            href={`data:image/png;base64,${generatedQrCode}`}
            download="qrcode.png"
          >
            Download QR Code
          </a>
        </div>
      )}
    </div>
  );
};

export default Qrcode;
