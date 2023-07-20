import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { AuthContext } from "@/contexts/AuthContext";
import Image from "next/image";
import { FormEvent, useContext, useState } from "react";

import bezerro from "../../public/bezerro.png";

export default function Register() {
  const [ name, setName ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ password, setPassword ] = useState<string>("");

  const { register } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(!name || !email || !password) return

    await register({ name, email, password });
  }
  
  return (
    <div className="w-screen h-screen">
      <div
        className="h-2/5 rounded-b-xl bg-green-600 text-center flex flex-col justify-center relative overflow-hidden"
      >
        <Image
          src={bezerro}
          alt="Bezerro"
          width={512}
          height={512}
          priority
          className="absolute opacity-40 z-10"
        />

        <h1 className="text-white text-2xl">Bem-vindo ao Cattle</h1>
        <p className="text-white">Plataforma de controle e gestão pecuária.</p>
      </div>

      <form id="register" onSubmit={(e) => handleSubmit(e)}>
        <div
          className="mt-12 grid gap-6 justify-center"
        >
          <Input
            label="Nome"
            type="text"
            value={name}
            autoComplete="true"
            required
            onChange={(e) => setName(e.target.value)}
          />

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
        </div>
      </form>
    </div>
  );
}