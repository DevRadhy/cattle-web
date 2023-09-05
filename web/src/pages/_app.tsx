import { AuthProvider } from '@/contexts/AuthContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import "@/interceptors/axios";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
