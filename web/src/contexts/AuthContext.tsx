import { api } from "@/services/api";
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

type User = {
  name: string;
  email: string;
}

type SignInData = {
  email: string;
  password: string;
};

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [ user, setUser ] = useState<User | null>(null);

  const router = useRouter();

  const isAuthenticated = !!user;

  useEffect(() => {
    // Verificar se possui algum token nos cookies
    const { token } = parseCookies();

    if(!token) {
      router.push("/login");
    };

    // Se existir, buscar informações do usuário e salvar no estado
  }, [router]);

 async function signIn({ email, password }: SignInData) {
   try {
    // Autenticar usuário no backend
    const { data } = await api.post("/users/login", {
        email,
        password,
      });
    
    // Salvar token do usuário nos cookies
    setCookie(undefined, "token", data.token);
  
    // Salvar informações do usuário em um estado
    setUser(data);

    router.push("/");
  } catch(err) {
    console.log("error");
  }
 }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}