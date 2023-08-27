import { NavBar } from "@/components/NavBar";
import { Resource } from "@/components/Resource";
import { AuthContext } from "@/contexts/AuthContext";
import { ActivityIcon, CalendarIcon, ClockIcon, PercentIcon, ArrowRightCircleIcon } from "lucide-react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { parseCookies } from "nookies";
import { useContext } from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <header
        className="realative"
      >
        <div
          className="absolute p-8 w-full h-96 flex flex-col justify-between"
        >
          <span
            className="text-white font-bold text-base"
          >
            Oi, {user?.name.split(' ')[0]}

              <span
                className="text-xl"
              >
                <br />Bom dia!
              </span>
          </span>

          <div>
            <h2
              className="text-white text-sm font-bold"
            >
              Clima
            </h2>
            <div
              className="relative bg-white w-full h-28 rounded-2xl flex justify-between items-center"
            >
              <div
                className="w-full flex flex-col ml-8 h-full pt-4"
              >
                <span
                  className="text-gray-400 text-[10px]"
                >
                  Hoje, 30 mai
                </span>

                <span
                  className="text-2xl"
                >
                  11ºC
                </span>

                <span
                  className="mb-2 flex-1 text-gray-400 text-[10px] flex flex-wrap items-end"
                >
                  Por do sol 19:07
                </span>
              </div>

              <div
                className="w-full flex flex-col items-end mr-8"
              >
                <Image
                  src="/sun.png"
                  alt="Sol"
                  width={35}
                  height={35}
                />

                <span
                  className="flex justify-center items-center text-gray-400 text-[10px] mt-4"
                >
                  23%
                  <Image
                    className="ml-1"
                    src="/water-drop.png"
                    alt="Gota de água"
                    width={8}
                    height={11}
                  />
                </span>
              </div>
            </div>



          </div>
        </div>

        <Image
          src="/bezerro.png"
          alt="Bezerro"
          width={390}
          height={346}
        />
      </header>

      <main
      className="w-screen p-8"
      >
        <h2
          className="text-sm font-bold"
        >
          Recursos
        </h2>

        <div
          className="grid grid-flow-col overflow-x-scroll mt-2"
        >
          <Resource title="Nascimento" link="/animals/register">
            <CalendarIcon
              color="white"
            />
          </Resource>

          <Resource title="Reprodutivo">
            <ClockIcon
              color="white"
            />
          </Resource>

          <Resource title="Movimentação Interna">
            <ArrowRightCircleIcon
              color="white"
            />
          </Resource>

          <Resource title="Sanitário">
            <ActivityIcon
              color="white"
            />
          </Resource>

          <Resource title="Pesagens">
            <PercentIcon
              color="white"
            />
          </Resource>
        </div>

        <a
          className="text-xs text-right block mt-4"
          href="#"
        >
          Ver todos os recursos
        </a>
      </main>

      <NavBar />
    </div>
  );
}
