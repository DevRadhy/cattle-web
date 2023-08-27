import Image from "next/image";
import { BellIcon, LanguagesIcon, UserSquareIcon, } from "lucide-react";

import rebanho from "../../public/rebanho.png";
import { BackButton } from "@/components/BackButton";

export default function Profile() {
  return (
    <div className="w-screen flex flex-col items-center">
      <BackButton />

      <header
        className="top-0 left-0 w-full h-64 bg-green-600 flex justify-center items-end"
      >
        <div
          className="translate-y-2/3 flex flex-col items-center"
        >
          <Image
            src={rebanho}
            alt="Profile Image"
            width={120}
            height={120}
            className="rounded-full"
          />

          <span className="text-2xl font-bold mt-4">Lucas Jantsch Guedes</span>
          <span className="text-xs mt-2">llucas.jguedes@gmail.com</span>
        </div>
      </header>

      <div className="mt-40 w-11/12">
        <ul
          className="border-spacing-2 shadow-md rounded-md bg-white p-4"
        >
          <li className="list-none flex items-center"><UserSquareIcon className="mr-3" />Editar informações de perfil</li>
          <li className="list-none flex items-center mt-2"><BellIcon className="mr-3" /> Notificações</li>
          <li className="list-none flex items-center mt-2"><LanguagesIcon className="mr-3" /> Idioma</li>
        </ul>
      </div>
    </div>
  );
}