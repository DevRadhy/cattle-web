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
};

export default function Register() {
  const createRegisterForm = useForm<RegisterProps>();
  const { handleSubmit } = createRegisterForm;

  const { register: signUp } = useContext(AuthContext);

  const onSubmit: SubmitHandler<RegisterProps> = async (data) => {
    await signUp(data);
  };

  return (
    <div className="h-screen w-screen md:grid md:grid-flow-col md:grid-cols-2 md:items-center">
      <Head>
        <title>Registrar | Rebanho Bovino</title>
      </Head>

      <div className="flex h-2/5 items-center justify-center bg-green-600 md:h-full">
        <h1 className="m-4 text-center text-white">
          Plataforma de controle e gestão pecuária.
        </h1>
      </div>

      <FormProvider {...createRegisterForm}>
        <form id="register" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-12 grid justify-center gap-6">
            <Input label="Nome" type="text" autoComplete="true" required />

            <Input label="Email" type="email" autoComplete="true" required />

            <Input label="Senha" type="password" required />

            <Button text="Registrar" type="submit" form="register" />

            <span
              className="
              before:content[''] m-auto w-32 text-center
              text-gray-300 before:block before:h-px before:w-60 before:-translate-x-14 before:translate-y-3 before:border-x-16 before:border-gray-300
              "
            >
              Ou entre com
            </span>

            <button className="relative flex h-10 w-full max-w-xs items-center justify-center rounded-lg bg-gray-100">
              <Image
                className="absolute left-0 ml-6"
                src="/google.png"
                alt="Google"
                width={20}
                height={20}
              />
              Entrar com o Google
            </button>

            <Link
              href="/login"
              className="m-auto text-gray-500 hover:cursor-pointer hover:text-gray-600"
            >
              Já possui uma conta? Faça login
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
