import { buttonVariants } from "@/components/ui/button";
import User from "@/components/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session) {
    return (
      <Card variant="default" className="flex flex-col p-8 gap-6">
        <span>Por favor faça login: </span>
        <Button asChild variant="link" format="pill">
          <Link href="/sign-in">Clique aqui</Link>
        </Button>
      </Card>
    );
  }

  return (
    <div>
      <h1 className="text-4xl">Home</h1>
      <Button asChild variant="link" format="pill">
        <Link href="/admin">
          Ir para dashboard de adm
        </Link>
      </Button>

      <h2>Client Session</h2>
      <User />
      <h2>server session</h2>
      {JSON.stringify(session)}
    </div>
  );
}
