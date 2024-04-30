import { buttonVariants } from "@/components/ui/button";
import User from "@/components/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(session)
  
  if (!session) {
    return <>none</>
  }

  return (
    <div>
      <h1 className="text-4xl">Home</h1>
      <Link className={buttonVariants()} href="/admin">
        Ir para dashboard de adm
      </Link>

      <h2>Client Session</h2>
      <User />
      <h2>server session</h2>
      {JSON.stringify(session)}
    </div>
  );
}
