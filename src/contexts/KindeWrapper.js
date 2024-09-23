import React from "react";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import App from "../App";

const KindeWrapper = () => (
  <KindeProvider
    clientId={process.env.REACT_APP_KINDE_CLIENT_ID}
    domain={process.env.REACT_APP_KINDE_DOMAIN}
    logoutUri={process.env.REACT_APP_KINDE_LOGOUT_URI}
    redirectUri={process.env.REACT_APP_KINDE_REDIRECT_URI}
  >
    <App />
  </KindeProvider>
);

export default KindeWrapper;
