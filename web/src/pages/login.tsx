import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { AuthContext } from "@/contexts/AuthContext";
import Image from "next/image";
import { useContext } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import rebanho from "../../public/rebanho.png";
import Head from "next/head";
import Link from "next/link";

type LoginProps = {
  email: string;
  password: string;
};

export default function Login() {
  const createLoginForm = useForm<LoginProps>();
  const { handleSubmit } = createLoginForm;

  const { signIn } = useContext(AuthContext);

  const onSubmit: SubmitHandler<LoginProps> = async (data) => {
    await signIn(data);
  };

  return (
    <div className="h-screen w-screen md:grid md:grid-flow-col md:grid-cols-2 md:items-center">
      <Head>
        <title>Login | Rebanho Bovino</title>
      </Head>

      <Image
        className="h-1/2 w-full object-cover md:h-full"
        src={rebanho}
        alt="Rebanho bovino"
        width={512}
        height={512}
        priority
      />

      <FormProvider {...createLoginForm}>
        <form id="login" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-12 grid justify-center gap-6 md:mt-0">
            <Input
              label="Email"
              type="email"
              id="email"
              autoComplete="true"
              required
            />

            <Input label="Senha" type="password" id="password" required />

            <Button text="Entre" type="submit" form="login" />

            <span
              className="
              before:content[''] m-auto w-32 text-center
              text-gray-300 before:block before:h-px before:w-60 before:-translate-x-14 before:translate-y-3 before:border-x-16 before:border-gray-300
              "
            >
              Ou entre com
            </span>

            <button className="relative flex h-10 w-full max-w-xs items-center justify-center rounded-md bg-gray-100">
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
              href="/register"
              className="m-auto text-gray-500 hover:cursor-pointer hover:text-gray-600"
            >
              Não possui uma conta? se cadastre
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
