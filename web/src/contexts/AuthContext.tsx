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
  id: string;
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

    if(!token) return;

    // Se existir, buscar informações do usuário e salvar no estado
    api.get(`/users/${user?.id}`).then((response) => {
      setUser(response.data);
    });
  }, [user]);

 async function signIn({ email, password }: SignInData) {
   try {
    // Autenticar usuário no backend
    const { data } = await api.post("/users/login", {
        email,
        password,
      });
    
    // Salvar token do usuário nos cookies
    setCookie(undefined, "token", data.token);

    // Adicionar token ao header das requisições
    api.defaults.headers['Authorization'] = `Bearer ${data.token}`;
  
    // Salvar informações do usuário em um estado
    setUser(data);

    router.push("/");
  } catch(err) {
    console.log("login error");
  }
 }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}