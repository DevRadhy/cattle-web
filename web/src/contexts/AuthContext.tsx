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

  const isAuthenticated = !!user;

  useEffect(() => {
    // Verificar se possui algum token nos cookies

    // Se existir, buscar informações do usuário e salvar no estado
  }, []);

 async function signIn({ email, password }: SignInData) {
  // Autenticar usuário no backend

  // Salvar token do usuário nos cookies

  // Salvar informações do usuário em um estado
 }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}