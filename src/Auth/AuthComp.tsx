import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useAuth } from './AuthContext';
import { doc, setDoc } from "firebase/firestore";
import { User } from '~/services/api/model/User';
import { db } from '~/config/firebaseConfig';

const clientId = "305353374248-6tu8hnpemdh6dq2s65t487uf7qa8ifcd.apps.googleusercontent.com";

const AuthComponent: React.FC = () => {
  const { user, login, logout } = useAuth();

  const onSuccess = async (res: any) => {

    const userData: User = new User(
      res.profileObj.googleId || "",
      res.profileObj.imageUrl || "",
      res.profileObj.email || "",
      res.profileObj.name || "",
      res.profileObj.givenName || "",
      res.profileObj.familyName || ""
    );

    try {
      await setDoc(doc(db, "users", res.profileObj.googleId), { ...userData }, { merge: true });
      console.log("User data inserted successfully:", userData);
    } catch (error) {
      console.error("Error inserting user data: ", error);
    }

    login(res.profileObj);
  };

  const onFailure = (res: any) => {
    console.log('failed:', res);
  };

  const onLogoutSuccess = () => {
    alert("Logout success");
    logout();
  };

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  return (
    <>
      {user ? (
        <GoogleLogout
          clientId={clientId}
          onLogoutSuccess={onLogoutSuccess}
          render={(renderProps) => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="logout-button w-full hover:bg-[#f3f4f7] text-left">
              Đăng xuất
            </button>
          )}
        />
      ) : (
        <GoogleLogin
          clientId={clientId}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          render={(renderProps) => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="login-button w-full hover:bg-[#f3f4f7] text-left">
              Đăng nhập
            </button>
          )}
        />
      )}
    </>
  );
};

export default AuthComponent;