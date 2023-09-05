import { api } from "@/services/api";
import { useRouter } from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  signOut: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
};

type User = {
  name: string;
  email: string;
  id: string;
}

type SignInData = {
  email: string;
  password: string;
}

type RegisterData = {
  name: string;
  email: string;
  password: string;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [ user, setUser ] = useState<User | null>(null);
  const router = useRouter();

  const isAuthenticated = !!user;

  useEffect(() => {
  }, []);

  async function signIn({ email, password }: SignInData) {
   try {
    const { data } = await api.post("/auth", {
        email,
        password,
      });
    
    setCookie(undefined, "token", data.token, {
      maxAge: 15, // 15 minutes
    });
    setCookie(undefined, "refresh_token", data.refresh_token, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    api.defaults.headers['Authorization'] = `Bearer ${data.token}`;
  
    setUser(data);

    router.push("/");
  } catch(err) {
    console.log("login error");
  }
  }

  async function signOut() {
    destroyCookie(undefined, "refresh_token");
    destroyCookie(undefined, "token");

    setUser(null);

    router.push("/login");
  }

  async function register({ name, email, password }: RegisterData) {
  try {
    const { data } = await api.post("/users/register", {
        name,
        email,
        password,
      });
    
    setUser(data);

    router.push("/");
  } catch(err) {
    console.log("register error");
  }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, register, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}