import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { AuthContext } from "@/contexts/AuthContext";
import Image from "next/image";
import { FormEvent, useContext, useState } from "react";

import rebanho from "../../public/rebanho.png";

export default function Login() {
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(!email || !password) return

    await signIn({ email, password });
  }

  return (
    <div className="w-screen h-screen">
      <Image
        className="h-1/2"
        src={rebanho}
        alt="Rebanho bovino"
        width={512}
        height={512}
        priority
      />

      <form id="login" onSubmit={(e) => handleSubmit(e)}>
        <div
          className="mt-12 grid gap-6 justify-center"
        >
          <Input
            label="Email"
            type="text"
            value={email}
            autoComplete="true"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
    
          <Button
            text="Entre"
            type="submit"
            form="login"
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
        </div>
      </form>
    </div>
  );
}