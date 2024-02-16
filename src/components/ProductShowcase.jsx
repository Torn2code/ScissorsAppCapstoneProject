import React from 'react';

function ProductShowcase() {
  return (
    <div className="Product-bar">
      <div className="Opt-bar">
        <h1 className="big-bar">
          Optimize Your Online Experience with Our Advanced{' '}
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
        <button className="Try-bar">Sign Up</button>
        <p className="learn-bar">Learn more</p>
      </div>

      <div className="line-grid">
        <div className="line">
          <p className="line-text">One Stop.</p>
          <p>
            Four{' '}
            <span>
              <span className="highlight-text">Possibilities.</span>
            </span>
          </p>
        </div>
        <div className="Next-line">
          <p className="line-text">3M</p>
          <p>Active users</p>
        </div>
        <div className="Next-line">
          <p className="line-text">60M</p>
          <p>Links and QR codes created</p>
        </div>
        <div className="Next-line">
          <p className="line-text">1B</p>
          <p>Clicked and scanned connections</p>
        </div>
        <div className="Next-line">
          <p className="line-text">300k</p>
          <p>App integerations</p>
        </div>
      </div>

      <div className="container-grid">
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
          <div className="why-bar">
            <img src="url-shortening.svg" alt="" />
            <p>URL Shortening</p>
            <p className="under-tab">
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale, URL redirects.
            </p>
          </div>
          <div className="why-bar">
            <img src="edit.svg" alt="" />
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
              <img src="grid.svg" alt="" />
              <p>QR Codes</p>
              <p className="under-tab">
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
            <div className="why-bar">
              <img src="activity.svg" alt="" />
              <p>Data Analytics</p>
              <p className="under-tab">
                Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="head-container">
        <h1 className="Head-tab">
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

      <div className="div-container">
        <div className="basic-bar">
          <img src="Desktop - 10.svg" alt="" />
        </div>
        <div className="dark-bar">
          <img src="Desktop - 11.svg" alt="" />
        </div>
        <div>
          <img src="Desktop - 12.svg" alt="" />
        </div>

        <div className="Custom-bar">
          <button className="bottom-button">Get Custom Pricing</button>
          <button className="butt-butt">Select Pricing</button>
        </div>
      </div>
    </div>
  );
}

export default ProductShowcase;
