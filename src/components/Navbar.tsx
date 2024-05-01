import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Glasses } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import UserAccountnav from "./UserAccountnav";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className=" bg-green-200 py-2 border-black fixed w-full z-10 top-0 border-b-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 h-full">
          <Glasses size={36} />
          <span className={"font-semibold text-3xl"}>HOME</span>
        </Link>
        {session?.user ? (
          <UserAccountnav />
        ) : (
          <Button asChild={true}>
            <Link href="/sign-in">Entrar</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
