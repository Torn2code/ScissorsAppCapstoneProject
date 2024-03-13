import React, { useState } from "react";

function FaQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenIndex((prevIndex) => (index === prevIndex ? null : index));
  };

  const getToggleSign = (index: number) => (openIndex === index ? "-" : "+");

  return (
    <div id="faQ" className="FaQ">
      <h2>FAQs</h2>
      <div className="question">
        <h3 onClick={() => handleDropdownToggle(0)}>
          How does URL shortening work? {getToggleSign(0)}
        </h3>
        {openIndex === 0 && (
          <p>
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        )}
      </div>
      <div className="question">
        <h3 onClick={() => handleDropdownToggle(1)}>
          Is it necessary to create an account to use the URL shortening
          service? {getToggleSign(1)}
        </h3>
        {openIndex === 1 && (
          <p>
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        )}
      </div>
      <div className="question">
        <h3 onClick={() => handleDropdownToggle(2)}>
          Are the shortened links permanent? Will they expire?{" "}
          {getToggleSign(2)}
        </h3>
        {openIndex === 2 && (
          <p>
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        )}
      </div>
      <div className="question">
        <h3 onClick={() => handleDropdownToggle(3)}>
          Are there any limitations on the number of URLs I can shorten?{" "}
          {getToggleSign(3)}
        </h3>
        {openIndex === 3 && (
          <p>
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        )}
      </div>
      <div className="question">
        <h3 onClick={() => handleDropdownToggle(4)}>
          Can I customize the shortened URLs to reflect my brand or content?{" "}
          {getToggleSign(4)}
        </h3>
        {openIndex === 4 && (
          <p>
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        )}
      </div>
      <div className="question">
        <h3 onClick={() => handleDropdownToggle(5)}>
          Can I track the performance of my shortened URLs? {getToggleSign(5)}
        </h3>
        {openIndex === 5 && (
          <p>
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        )}
      </div>
      <div className="question">
        <h3 onClick={() => handleDropdownToggle(6)}>
          How secure is the URL shortening service? Are the shortened links
          protected against spam or malicious activity? {getToggleSign(6)}
        </h3>
        {openIndex === 6 && (
          <p>
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        )}
      </div>
      <div className="question">
        <h3 onClick={() => handleDropdownToggle(7)}>
          What is a QR code and what can it do? {getToggleSign(7)}
        </h3>
        {openIndex === 7 && (
          <p>
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        )}
      </div>
      <div className="question">
        <h3 onClick={() => handleDropdownToggle(8)}>
          Is there an API available for integrating the URL shortening service
          into my own applications or websites? {getToggleSign(8)}
        </h3>
        {openIndex === 8 && (
          <p>
            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.
          </p>
        )}
      </div>
    </div>
  );
}

export default FaQ;
