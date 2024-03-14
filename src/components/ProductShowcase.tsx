import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ProductShowcase() {
  const navigateToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const counters = [
      { id: "active-users", startValue: 1, endValue: 3, unit: "M" },
      { id: "links-created", startValue: 10, endValue: 60, unit: "M" },
      { id: "connections", startValue: 0, endValue: 1, unit: "B" },
      { id: "app-integrations", startValue: 100, endValue: 300, unit: "K" },
    ];

    const duration = 3000;

    const updateCounter = () => {
      counters.forEach((counter) => {
        const counterElement = document.getElementById(counter.id);

        if (counterElement) {
          let currentValue = counter.startValue;

          const increment = (counter.endValue - counter.startValue) / duration;

          const intervalId = setInterval(() => {
            currentValue += increment;
            counterElement.textContent = currentValue.toFixed(0) + counter.unit;

            if (currentValue >= counter.endValue) {
              clearInterval(intervalId);
            }
          }, 10);
        }
      });
    };

    updateCounter();
  }, []);

  return (
    <div
      className="Product-bar"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(248,240,239,1), rgba(238,237,227), rgba(253,251,238,1))",
      }}
    >
      <div className="Opt-bar">
        <h1 className="big-bar">
          Optimize Your Online Experience with Our Advanced{" "}
          <span className="URL-bar">URL Shortening</span> Solution
        </h1>
      </div>

      <div className="Pers-bar">
        <p className="per-bar">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
      </div>

      <div className="sign-header">
        <div className="Sign-bar">
          <Link to="/signup">Sign Up</Link>
        </div>
        <p className="learn-bar">Learn more</p>
      </div>

      <div className="vector-box">
        <img
          className="Vector-img"
          src={require("../../src/Assets/Images/Vector 2.png")}
          alt="background"
        />
        <div className="cdn-icon">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/fluency-systems-regular/48/link--v1.png"
            alt="link--v1"
          />
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/fluency-systems-regular/48/link--v1.png"
            alt="link--v1"
          />
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/fluency-systems-regular/48/link--v1.png"
            alt="link--v1"
          />
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/laces/64/228BE6/arrow.png"
            alt="arrow"
          />
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/fluency-systems-regular/48/link--v1.png"
            alt="link--v1"
          />
        </div>
        <p className="eclipse-text">
          Seamlessly transform your long URLs into concise and shareable links
          with just a few clicks.
        </p>
      </div>

      <div
        className="line-grid"
        style={{
          height: "200px",
          backgroundImage:
            "linear-gradient(to right, rgba(249,251,253,1), rgba(249,251,253,1),rgba(249,251,253,1))",
        }}
      >
        <div className="line">
          <p className="line-textOne">One Stop.</p>
          <p className="high-textt">
            Four{" "}
            <span>
              <span className="highlight-text">Possibilities.</span>
            </span>
          </p>
        </div>

        <div className="Next-line">
          <p id="active-users" className="line-text">
            1M
          </p>
          <p className="under-text">Active users</p>
        </div>
        <div className="Next-line">
          <p id="links-created" className="line-text">
            10M
          </p>
          <p className="under-text">Links & QR codes created</p>
        </div>
        <div className="Next-line">
          <p id="connections" className="line-text">
            0B
          </p>
          <p className="under-text">Clicked and scanned connections</p>
        </div>
        <div className="Next-line">
          <p id="app-integrations" className="line-text">
            100K
          </p>
          <p className="under-text">App integrations</p>
        </div>
      </div>

      <div id="container-grid" className="container-grid">
        <div className="grid-style">
          <div className="why-bar">
            <img src="Line 70.svg" alt="" />
            Why choose <span className="why-span">Scissors</span>
            <p className="under-tab">
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.
            </p>
          </div>
          <div
            id="gradient-bar"
            className="why-bar"
            onClick={() => navigateToSection("gradient-bar")}
          >
            <img
              className="icon-icon"
              width="48"
              height="48"
              src="https://img.icons8.com/fluency-systems-regular/48/link--v1.png"
              alt="link--v1"
            />
            <p>URL Shortening</p>
            <p className="under-tab">
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </div>
          <div
            id="gradient-bar"
            className="why-bar"
            onClick={() => navigateToSection("gradient-bar")}
          >
            <img
              className="icon-icon"
              width="48"
              height="48"
              src="https://img.icons8.com/external-outline-juicy-fish/60/000000/external-write-contact-us-outline-outline-juicy-fish-3.png"
              alt="external-write-contact-us-outline-outline-juicy-fish-3"
            />
            <p>Custom URLs</p>
            <p className="under-tab">
              With Scissor, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </p>
          </div>
        </div>
        <div className="grid-style">
          <div className="gridd-style">
            <div></div>
            <div className="why-bar">
              <Link to="/qrcode">
                <img
                  className="icon-icon"
                  width="32"
                  height="32"
                  src="https://img.icons8.com/tiny-color/16/000000/qr-code.png"
                  alt="qr-code"
                />
                <p>QR Codes</p>
                <p className="under-tab">
                  Generate QR codes to your business, events. Bring your
                  audience and customers to your doorstep with this scan and go
                  solution.
                </p>
              </Link>
            </div>
            <div className="why-bar">
              <Link to="/analytics">
                <img
                  className="icon-icon"
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/000000/pulse--v2.png"
                  alt="pulse--v2"
                />
                <p>Data Analytics</p>
                <p className="under-tab">
                  Receive data on the usage of either your shortened URL, custom
                  URLs, or generated QR codes. Embedded to monitor progress.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="head-container">
        <h1
          className="Head-tab"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="line-bar">
            <img src="Line 70 (1).svg" alt="" />
          </div>
          A <span className="Head-span">price perfect</span> for your needs.
        </h1>
      </div>

      <h2 className="pre-head">
        From catering for your personal, business, event, socials needs, you can
        be rest assured we have you in mind in our pricing.
      </h2>

      <div id="div-container" className="div-container">
        <div className="basic-bar">
          <div>Basic</div>
          <h1>Free</h1>
          <p>Free plan for all users</p>
          <div className="feature-basic">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/228BE6/checked--v1.png"
              alt="checked--v1"
            />
            Unlimited URL Shortening
          </div>
          <div className="feature-basic">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/228BE6/checked--v1.png"
              alt="checked--v1"
            />
            Basic Link Analytics
          </div>
          <div className="feature-basic">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/228BE6/checked--v1.png"
              alt="checked--v1"
            />
            Customizable Short Links
          </div>
          <div className="feature-basic">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/228BE6/checked--v1.png"
              alt="checked--v1"
            />{" "}
            Standard Support
          </div>
          <div className="feature-basic">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/228BE6/checked--v1.png"
              alt="checked--v1"
            />{" "}
            Ad-supported
          </div>
        </div>

        <div className="dark-bar">
          <div>Professional</div>
          <h1>$15/month</h1>
          <p>Ideal for business creators</p>

          <div className="feature-pro">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/FFFFFF/checked--v1.png"
              alt="checked--v1"
            />
            Enhanced Link Analytics
          </div>
          <div className="feature-pro">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/FFFFFF/checked--v1.png"
              alt="checked--v1"
            />
            Custom Branded Domains
          </div>
          <div className="feature-pro">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/FFFFFF/checked--v1.png"
              alt="checked--v1"
            />
            Advanced Link Customization
          </div>
          <div className="feature-pro">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/FFFFFF/checked--v1.png"
              alt="checked--v1"
            />
            Priority Support
          </div>
          <div className="feature-pro">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/FFFFFF/checked--v1.png"
              alt="checked--v1"
            />
            Ad-free Experience
          </div>
        </div>

        <div className="Teams-bar">
          <div>Teams</div>
          <h1>$25/month</h1>
          <p>Share with up to 10 users</p>

          <div className="feature-teams">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/228BE6/checked--v1.png"
              alt="checked--v1"
            />
            Team Collaboration
          </div>
          <div className="feature-teams">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/228BE6/checked--v1.png"
              alt="checked--v1"
            />
            User Roles and Permissions
          </div>
          <div className="feature-teams">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/228BE6/checked--v1.png"
              alt="checked--v1"
            />
            Enhanced Security
          </div>
          <div className="feature-teams">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/228BE6/checked--v1.png"
              alt="checked--v1"
            />
            API Access
          </div>
          <div className="feature-teams">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-outlined/24/228BE6/checked--v1.png"
              alt="checked--v1"
            />
            Dedicated Account Manager
          </div>
        </div>
      </div>

      <div className="Custom-bar">
        <button className="bottom-button">Get Custom Pricing</button>
        <button className="butt-butt">Select Pricing</button>
      </div>
    </div>
  );
}

export default ProductShowcase;
