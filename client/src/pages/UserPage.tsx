import Spinner from "@/components/ui/Spinner";
import { useCurrentUser } from "@/hooks/authHook";
import { formatDate } from "@/utils/helpers";

const UserPage = () => {
  const { currentUser, error, isError, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !currentUser) {
    return <div>{error?.message || "something went wrong"}</div>;
  }

  const { nickName, id, email, createdAt, profileImage } = currentUser;

  return (
    <main className="w-full min-h-full border-black border flex flex-col gap-4 items-center justify-start pt-16">
      <h1 className="text-4xl font-bold tracking-wide">{nickName}</h1>

      <h1 className="">{id}</h1>
      <div className="w-64 h-80 rounded-sm overflow-hidden shadow-sm">
        <img
          src={profileImage}
          alt="profileimage"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="italic text-xl">{email}</p>
      <p className="text-sm text-gray-400">Since {formatDate(createdAt)}</p>
    </main>
  );
};

export default UserPage;
