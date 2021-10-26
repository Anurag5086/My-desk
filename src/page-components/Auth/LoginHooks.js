import React from "react";
import { useGoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import google from "../../assets/images/google.png";
import { addUser } from "../../actions/actions";
import "./styles.css";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function LoginHooks() {
  const history = useHistory();

  const onSuccess = (res) => {
    localStorage.setItem("googleUser", res.profileObj.name);
    localStorage.setItem("googleEmail", res.profileObj.email);
    localStorage.setItem("googleUserId", res.profileObj.googleId);
    addUser(res.profileObj.name, res.profileObj.email, res.profileObj.googleId);
    history.push("/desk");
  };

  const onFailure = (res) => {
    alert(`Failed to login! Please try again!`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <div className="login_container">
      <button onClick={signIn} className="login_button">
        <img src={google} alt="google login" height="40px" width="40px"></img>
        <span className="login_span">Sign in with Google</span>
      </button>
    </div>
  );
}

export default LoginHooks;
