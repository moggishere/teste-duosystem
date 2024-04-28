import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

// Definir schema para validacao
const userSchema = z.object({
  username: z.string().min(1, "Requer usuário").max(100),
  name: z.string().min(1, "Requer nome").max(100),
  email: z.string().min(1, "Requer email").email("Invalid email"),
  password: z
    .string()
    .min(1, "Requer senha")
    .min(8, "Requer senha com mínimo de 8 caracteres"),
  birthday: z.string().datetime(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, name, password, birthday } =
      userSchema.parse(body);

    // check email ja existente
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Usuário com email já existente" },
        { status: 409 }
      );
    }

    // check username ja existente
    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "Usuário com username já existente" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        email,
        username,
        name,
        password: hashedPassword,
        birthday,
      },
    });

    // oculta senha em response
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        user: rest,
        message: "Novo user adicionado",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Erro no cadastro",
      },
      { status: 500 }
    );
  }
}
