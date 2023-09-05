import { api } from "@/services/api";
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";

api.interceptors.response.use((response) => response, async (error) => {
  if (error.response.status === 401) {
    const { 'refresh_token': refreshToken } = parseCookies();

    if(!refreshToken) {
      const router = useRouter();

      return router.push("/login");
    }

    const { data } = await api.post("/auth/refresh", null, {
      headers: {
        'Authorization': `Bearer ${refreshToken}`
      }
    });

    setCookie(undefined, "token", data.token);
    setCookie(undefined, "refresh_token", data.refreshToken);

    api.defaults.headers['Authorization'] = `Bearer ${data.token}`;
  }
});
