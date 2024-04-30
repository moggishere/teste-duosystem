"use client";
import React, { useState } from "react";
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
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Toggle } from "../ui/toggle";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (signInData?.error) {
      //TODO adicionar toast de error
      console.log(signInData.error);
    } else {
      router.push("/admin");
      router.refresh();
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="mail@example.com" {...field} />
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
                    placeholder="Sua senha"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className="flex justify-end gap-2  w-full mt-8">
            <span>{"Revelar a senha"}</span>
            <Toggle
              pressed={isPasswordVisible}
              onPressedChange={() => {
                setIsPasswordVisible(!isPasswordVisible);
              }}
            />
          </span>
        </div>
        <Button className="w-full mt-6" type="submit" format="pill">
          Entrar
        </Button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-5">
        {"Se ainda não tiver uma conta "}
        <Link className="text-blue-500 hover:underline" href="/sign-up">
          cadastre-se
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
