import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { AuthContext } from "@/contexts/AuthContext";
import Image from "next/image";
import { useContext } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import Link from "next/link";
import Head from "next/head";

type RegisterProps = {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const createRegisterForm = useForm<RegisterProps>();
  const { handleSubmit } = createRegisterForm;

  const { register: signUp } = useContext(AuthContext);

  const onSubmit: SubmitHandler<RegisterProps> = async (data) => {
    await signUp(data);
  }
  
  return (
    <div className="w-screen h-screen md:grid md:grid-flow-col md:grid-cols-2 md:items-center">
      <Head>
        <title>Registrar | Rebanho Bovino</title>
      </Head>

      <div
        className="h-2/5 bg-green-600 flex justify-center items-center md:h-full"
      >
        <h1 className="text-white text-center m-4">Plataforma de controle e gestão pecuária.</h1>
      </div>

      <FormProvider  {...createRegisterForm}>
        <form id="register" onSubmit={handleSubmit(onSubmit)}>
          <div
            className="mt-12 grid gap-6 justify-center"
          >
            <Input
              label="Nome"
              type="text"
              autoComplete="true"
              required
            />

            <Input
              label="Email"
              type="email"
              autoComplete="true"
              required
            />

            <Input
              label="Senha"
              type="password"
              required
            />
      
            <Button
              text="Registrar"
              type="submit"
              form="register"
            />

            <span
              className="
              w-32 text-center text-gray-300 m-auto
              before:block before:content[''] before:w-60 before:h-px before:-translate-x-14 before:translate-y-3 before:border-x-16 before:border-gray-300
              "
            >
              Ou entre com
            </span>

            <button
              className="w-full max-w-xs h-10 bg-gray-100 rounded-lg flex items-center justify-center relative"
            >
              <Image
                className="ml-6 absolute left-0"
                src="/google.png"
                alt="Google"
                width={20}
                height={20}
              />

              Entrar com o Google
            </button>

            <Link
              href="/login"
              className="text-gray-500 m-auto hover:cursor-pointer hover:text-gray-600"
            >
              Já possui uma conta? Faça login
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}