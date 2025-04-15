import API from "@/config/axiosConfig";

interface signUpTypes {
  nickName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface signInTypes {
  nickName: string;
  password: string;
}

export const handleSignUp = async (inputData: signUpTypes) =>
  API.post("/api/v1/user/signUp", inputData);

export const handleSignIn = async (inputData: signInTypes) =>
  API.post("/api/v1/user/signIn", inputData);

export const handleCurrentUser = async () =>
  API.get("/api/v1/user/currentUser");
