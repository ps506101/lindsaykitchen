import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    console.error(`API Error: ${res.status} - ${text}`);
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Ensure URL always starts with /api
  const apiUrl = url.startsWith('/api') ? url : `/api${url}`;
  console.log(`Making ${method} request to: ${apiUrl}`);

  const res = await fetch(apiUrl, {
    method,
    headers: {
      ...data ? { "Content-Type": "application/json" } : {},
      'Accept': 'application/json'
    },
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const [url] = queryKey as [string];
    // Ensure URL always starts with /api
    const apiUrl = url.startsWith('/api') ? url : `/api${url}`;
    console.log(`Fetching data from: ${apiUrl}`);

    try {
      const res = await fetch(apiUrl, {
        headers: {
          'Accept': 'application/json'
        },
        credentials: "include",
      });

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      const data = await res.json();
      console.log(`Received data:`, data);
      return data;
    } catch (error) {
      console.error(`Error fetching ${apiUrl}:`, error);
      throw error;
    }
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: 1,
      retryDelay: 1000,
    },
    mutations: {
      retry: 1,
      retryDelay: 1000,
    },
  },
});