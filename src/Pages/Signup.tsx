import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  AuthError,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      console.error("Password must have at least 6 characters, one number, one uppercase, and one lowercase letter.");
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential && userCredential.user) {
        navigate("/");
      } else {
        console.error("Error: User is null or userCredential is undefined.");
      }
    } catch (error: any) {
      handleAuthError(error);
    }
  };

  const handleAuthError = (error: AuthError) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    switch (errorCode) {
      case "auth/invalid-email":
        console.error("Invalid email format");
        break;
      case "auth/user-disabled":
        console.error("User account has been disabled");
        break;
      case "auth/user-not-found":
        console.error("User not found");
        break;
      case "auth/wrong-password":
        console.error("Incorrect password");
        break;
      default:
        console.error("Authentication error:", errorMessage);
        break;
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    } else if (id === "retypePassword") {
      setRetypePassword(value);
    }
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    return regex.test(password);
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <p>Sign Up With:</p>

            <div className="login-buttons">
              <button onClick={signInWithGoogle} className="google-button">
                <img
                  width="10"
                  height="10"
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
                />{" "}
                Google
              </button>
              <button className="apple-button">
              <img width="10" height="10" src="https://img.icons8.com/ios/50/mac-os--v1.png" alt="mac-os--v1"/>{" "}
                Apple
              </button>
            </div>

            <div className="divider-line">
              <hr />
              <span className="or-text"> Or </span>
              <hr />
            </div>

            <form onSubmit={onSubmit}>
              <div className="User-Up">
                <label htmlFor="username"></label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={onChange}
                  required
                  placeholder="Username"
                />
              </div>
              <div className="Email-Up">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  required
                  placeholder="Email address"
                />
              </div>

              <div className="Pass-Up">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={onChange}
                  required
                  placeholder="Password"
                />
              </div>

              <div className="Retype-Up">
                <label htmlFor="retypePassword"></label>
                <input
                  type="password"
                  id="retypePassword"
                  value={retypePassword}
                  onChange={onChange}
                  required
                  placeholder="Retype Password"
                />
              </div>

<div className="Cond-Up">
  <p>
    6 or more characters, one number, one uppercase & one lower case.
  </p>
</div>

              <div >
                <button type="submit" className="Sig-Up" >Sign up with Email </button>
              </div>


              <p className="Ald-Up">
  Already have an account? <Link to="/signin" className="login-link">Log in</Link>
</p>
<p className="Ter-Up">
By signing up, you agree to
</p>
              <p className="Terms-Up">
                {" "}
                <strong>Terms of Service, Privacy Policy</strong> and <strong>Acceptable Use Policy</strong>
                </p>


            </form>

       
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;