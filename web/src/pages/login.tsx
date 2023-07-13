import { Input } from "@/components/Input";
import { EyeIcon } from "lucide-react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="w-screen h-screen">
      <Image
        className="h-1/2"
        src="/rebanho.png"
        alt="Rebanho bovino"
        width={512}
        height={512}
      />

      <div
        className="h-1/2 flex flex-col items-center"
      >
        <div
          className="w-full mb-6 grid grid-rows-2 justify-center gap-3 mt-12"
        >
          <Input
            label="Email"
            type="text"
          />

          <Input
            label="Senha"
            type="password"
          >
            <EyeIcon
              className="mr-4 absolute right-0 bottom-0 -translate-y-1/3"
              color="#888"
              strokeWidth={1.5}
            />
          </Input>
        </div>

        <span
          className="
          w-32 text-center text-gray-300
          before:block before:content[''] before:w-60 before:h-px before:-translate-x-14 before:translate-y-3 before:border-x-16 before:border-gray-300
          "
        >
          Ou entre com
        </span>

        <button
          className="w-80 h-10 bg-gray-100 rounded-lg m-6 flex items-center justify-center"
        >
          <Image
            className="ml-4 absolute left-12"
            src="/google.png"
            alt="Google"
            width={20}
            height={20}
          />

          Entrar com o Google
        </button>
      </div>
    </div>
  );
}