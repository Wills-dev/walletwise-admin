import Link from "next/link";

const UserTableLink = ({ name, id }: { name: string; id: string }) => {
  return (
    <Link
      href={`/manage-user/info/${id}`}
      className="hover:text-purple-600 hover:underline transition-all duration-300 text-center w-full capitalize"
    >
      {name}
    </Link>
  );
};

export default UserTableLink;
