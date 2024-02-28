import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { UserLoginContext } from "../../context/UserContext";
import { useContext } from "react";

export function AuthLayout() {
  const { setCredential, setUserData } = useContext(UserLoginContext);
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
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}
