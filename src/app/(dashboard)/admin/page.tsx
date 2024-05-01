import React from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);

  // console.log(session);

  if (session?.user) {
    return (
      <h2 className="text-2xl">
        Dashboard, Bem vindo de volta <strong>{session?.user.username}</strong>!
      </h2>
    );
  }

  return <h2>Por favor faça login</h2>;
};

export default page;
