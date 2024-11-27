import { CognitoUserPool, CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { LoginResponse } from "../types/global";

const poolData = {
  UserPoolId: "YOUR_USER_POOL_ID",
  ClientId: "YOUR_CLIENT_ID"
};

const userPool = new CognitoUserPool(poolData);

export const loginRequest = async (userId: string, password: string) => {
  return new Promise<LoginResponse>((resolve, reject) => {
    const userData = {
      Username: userId,
      Pool: userPool
    };

    const authenticationDetails = new AuthenticationDetails({
      Username: userId,
      Password: password
    });

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        resolve({ code: "200", description: "OK" });
      },
      onFailure: (err) => {
        resolve({ code: "400", description: "ログインできませんでした" });
      }
    });
  });
};
