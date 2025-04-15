import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSignUp } from "@/hooks/authHook";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputElement, setInputelement] = useState({
    nickName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signUp, error, isPending, isError } = useSignUp();

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signUp(inputElement);
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-accent">
      <h1 className="text-accent-foreground text-4xl font-semibold uppercase">
        Register
      </h1>
      <form
        onSubmit={handleSignUp}
        className="min-h-[10rem] h-auto w-[25rem]  flex flex-col gap-6 items-center py-3"
      >
        <div className="w-5/6 flex flex-col gap-1">
          <Label htmlFor="email">Email address </Label>
          <Input
            type="email"
            placeholder="enter email"
            onChange={(e) =>
              setInputelement((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="w-5/6 flex flex-col gap-1">
          <Label htmlFor="nickName">Nickname</Label>
          <Input
            type="text"
            placeholder="enter nickname"
            onChange={(e) =>
              setInputelement((prev) => ({ ...prev, nickName: e.target.value }))
            }
          />
        </div>
        <div className="w-5/6 flex flex-col gap-1">
          <Label htmlFor="password">password</Label>
          <Input
            type="password"
            placeholder="password"
            onChange={(e) =>
              setInputelement((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div className="w-5/6 flex flex-col gap-1">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            placeholder="confirm password"
            onChange={(e) =>
              setInputelement((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
          />
        </div>

        {isError && <p className="text-xs text-red-700">{error?.message}</p>}

        <Button disabled={isPending} type="submit">
          {isPending ? "loading" : "sign up"}
        </Button>
        <Link to={"/login"} className="text-sm underline ">
          Already have an Acoount?
        </Link>
      </form>
    </main>
  );
};

export default SignUp;
