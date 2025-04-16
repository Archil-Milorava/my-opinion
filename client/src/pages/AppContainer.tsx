import Spinner from "@/components/ui/Spinner";
import { useCurrentUser } from "@/hooks/authHook";
import { Navigate, Outlet } from "react-router-dom";

const AppContainer = () => {
  const { currentUser, isLoading,  error } = useCurrentUser();

  if (!currentUser && isLoading) {
    return <Spinner />
  }

  return currentUser ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate
      to={"/login"}
      replace
      state={{
        redirect: window.location.pathname,
        errorMessage: error?.message || "Session expired, please log in again.",
      }}
    />
  );
};

export default AppContainer;
