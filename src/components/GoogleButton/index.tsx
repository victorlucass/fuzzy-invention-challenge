import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { UserLoginContext } from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function GoogleButton() {
  const { setCredential, setUserData } = useContext(UserLoginContext);
  const navigate = useNavigate();
  return (
    <>
      <GoogleOAuthProvider clientId="630222207679-2jlj6evvtk27bjmo27i69iif6kg6dgpk.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decode = jwtDecode(credentialResponse.credential!);
            window.localStorage.setItem(
              "credential",
              credentialResponse.credential!
            );
            setCredential(credentialResponse.credential!);
            setUserData(decode);
            navigate("/feed");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}
