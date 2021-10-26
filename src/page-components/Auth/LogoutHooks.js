import React from "react";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function LogoutHooks() {
  const history = useHistory();

  const onLogoutSuccess = () => {
    history.push("/");
    localStorage.removeItem("googleUser");
    localStorage.removeItem("googleEmail");
    localStorage.removeItem("googleUserId");
  };

  const onFailure = () => {
    alert("Logout Failed! Please try again!");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <Button
      variant="contained"
      size="large"
      style={{ backgroundColor: "#9f5f80", color: "white" }}
      onClick={signOut}
    >
      <span>Sign Out</span>
    </Button>
  );
}

export default LogoutHooks;
