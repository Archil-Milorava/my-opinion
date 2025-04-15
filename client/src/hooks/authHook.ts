import {
  handleSignIn,
  handleSignUp,
  handleCurrentUser,
} from "@/services/apiAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();
  const {
    mutate: signUp,
    error,
    isPending,
    isError,
  } = useMutation({
    mutationFn: handleSignUp,
    onSuccess: (data) => {
      console.log(data);

      toast.success("account created successfully");
      navigate("/login");
    },
  });

  return { signUp, error, isPending, isError };
};

export const useSignIn = () => {
  const navigate = useNavigate();
  const {
    mutate: signIn,
    error,
    isPending,
    isError,
  } = useMutation({
    mutationFn: handleSignIn,
    onSuccess: () => {
      toast.success("welcome");
      navigate("/");
    },
  });

  return { signIn, error, isPending, isError };
};

export const useCurrentUser = () => {
  const {
    data: currentUser,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: handleCurrentUser,
  });

  return { currentUser, error, isError, isLoading };
};
