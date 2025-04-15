import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignIn } from "@/hooks/authHook";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const { signIn, error, isPending, isError } = useSignIn();

  const [inputElement, setInputelement] = useState({
    nickName: "",
    password: "",
  });

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signIn(inputElement);
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-accent">
      <h1 className="text-accent-foreground text-4xl font-semibold uppercase">
        Sign In
      </h1>
      <form
        onSubmit={handleLogin}
        className="min-h-[10rem] h-auto w-[25rem]  flex flex-col gap-6 items-center py-3"
      >
        <div className="w-5/6 flex flex-col gap-1">
          <Label htmlFor="email">Nickname </Label>
          <Input
            type="text"
            placeholder="enter nickname"
            onChange={(e) =>
              setInputelement((prev) => ({ ...prev, nickName: e.target.value }))
            }
          />
        </div>
        <div className="w-5/6 flex flex-col gap-1">
          <Label htmlFor="email">password</Label>
          <Input
            type="password"
            placeholder="password"
            onChange={(e) =>
              setInputelement((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>

        {isError && <p className="text-xs text-red-700">{error?.message}</p>}

        <Button type="submit" disabled={isPending}>
          {isPending ? "Loading" : "Log in"}
        </Button>
        <Link to={"/signup"} className="text-sm underline ">
          dont have an Account?
        </Link>
      </form>
    </main>
  );
};

export default Login;
