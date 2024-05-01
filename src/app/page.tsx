import { buttonVariants } from "@/components/ui/button";
import User from "@/components/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getServerSession(authOptions);

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
    <Card variant="default" className="flex flex-col p-8 gap-6">
      <h1 className="text-4xl">Home</h1>
      <h3>
        Seja bem-vindo(a), <strong>{session?.user.username}</strong>!
      </h3>
    </Card>
  );
}
