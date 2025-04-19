import {
  handleCurrentUser,
  handleSignIn,
  handleSignUp,
} from "@/services/apiAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();
  const {
    mutate: signUp,
    error,
    isPending,
    isError,
  } = useMutation({
    mutationFn: handleSignUp,
    onSuccess: () => {
      toast.success("account created successfully");
      navigate("/login");
    },
  });

  return { signUp, error, isPending, isError };
};

export const useSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const state = location.state 

  const {
    mutate: signIn,
    error,
    isPending,
    isError,
  } = useMutation({
    mutationFn: handleSignIn,
    onSuccess: () => {
      toast.success("welcome");
      navigate(state?.redirect || "/");
    },
  });

  return { signIn, error, isPending, isError };
};

export const useCurrentUser = () => {
  const { data: currentUser, ...rest } = useQuery({
    queryKey: ["currentUser"],
    queryFn: handleCurrentUser,
    staleTime: Infinity,
  });

  return { currentUser, ...rest };
};
