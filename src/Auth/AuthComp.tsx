import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useAuth } from './AuthContext';

const clientId = "305353374248-tmancapiepdhm8ghj411st7jq1ru2mp5.apps.googleusercontent.com";

const AuthComponent: React.FC = () => {
  const { user, login, logout } = useAuth();

  const onSuccess = (res: any) => {
    console.log("success: ", res.profileObj);
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