"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Toggle } from "../ui/toggle";
import Link from "next/link";
import { Provider as ToastProvider } from "@radix-ui/react-toast";

const FormSchema = z
  .object({
    username: z.string().min(1, "Requer usuário").max(100),
    name: z.string().min(1, "Requer nome").max(100),
    email: z.string().min(1, "Requer email").email("Invalid email"),
    password: z
      .string()
      .min(1, "Requer senha")
      .min(8, "Requer senha com mínimo de 8 caracteres"),
    confirmPassword: z.string().min(1, "Requer senha"),
    birthday: z
      .string()
      .refine((value) => !!Date.parse(value))
      .transform((value) => new Date(value)),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Senhas incompatíveis",
  });

const SignUpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      name: "",
      password: "",
      birthday: undefined,
      confirmPassword: "",
    },
  });

  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        name: values.name,
        email: values.email,
        password: values.password,
        birthday: values.birthday,
      }),
    });

    if (response.ok) {
      setIsSignUpSuccessful(true);
    } else {
      console.error(response);

      if (response?.status === 409) {
        setIsErrorMessage(true);
      }
      if (response?.status === 500) {
        setIsErrorMessage(true);
      }
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState<boolean>(false);

  if (isSignUpSuccessful) {
    return (
      <div className="flex flex-col p-8 gap-6">
        <div>Cadastro realizado com sucesso!</div>
        <Button asChild variant="link" format="pill">
          <Link href="/sign-in">Entrar</Link>
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome de usuário</FormLabel>
                <FormControl>
                  <Input placeholder="jorge123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="João" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data de nascimento</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="Data de nascimento"
                    {...field}
                    value={
                      field.value instanceof Date
                        ? field.value.toISOString().split("T")[0]
                        : field.value
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Adicione sua senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmação de senha</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Readicione sua senha"
                    type={isPasswordVisible ? "text" : "password"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="flex justify-end items-center gap-2 leading-tight w-full mt-8 h-8">
            <span>{"Revelar a senha"}</span>
            <Toggle
              pressed={isPasswordVisible}
              onPressedChange={() => {
                setIsPasswordVisible(!isPasswordVisible);
              }}
            />
          </span>
          {isErrorMessage && (
            <span className="flex justify-end items-center gap-2 leading-tight w-full mt-8 h-8 text-red-600">
              <span>{"Email ou apelido já existentes"}</span>
            </span>
          )}
        </div>
        <Button className="w-full mt-6" type="submit">
          Cadastrar-se
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
