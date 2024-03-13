import React from "react";
import { Link } from "react-router-dom";
import { signInWithRedirect, auth, provider } from "../firebase/firebaseconfig";

const SignIn = () => {
  const signInWithGoogle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signInWithRedirect(auth, provider)
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  return (
    <main>
      <section>
        <div>
          <p>Log in with:</p>

          <div className="login-buttons">
            <button onClick={signInWithGoogle} className="google-button">
              {" "}
              <img
                width="10"
                height="10"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />{" "}
              Google
            </button>
            <button className="apple-button">
              {" "}
              <img
                width="10"
                height="10"
                src="https://img.icons8.com/ios/50/mac-os--v1.png"
                alt="mac-os--v1"
              />{" "}
              Apple
            </button>
          </div>

          <div className="divider-line">
            <hr />
            <span className="or-text"> Or </span>
            <hr />
          </div>

          <form>
            <div className="Email-tab">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email address or username"
              />
            </div>

            <div className="Pass-tab">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
              />
            </div>
            <p className="Forgot-bar">Forgot your password?</p>

            <button type="submit" className="Log-Submit">
              Log in
            </button>
          </form>

          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>

        <p className="Sign-Terms">
          By signing in with an account, you agree to scissor's{" "}
          <strong>Terms of Service, Privacy Policy</strong> and{" "}
          <strong>Acceptable Use Policy</strong>
        </p>
      </section>
    </main>
  );
};

export default SignIn;
