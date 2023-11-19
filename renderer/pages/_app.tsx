import React from "react";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import {
  QueryClient,
  HydrationBoundary,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../styles/globals.css";
import { Suspense } from "react";
import { ThemeProvider } from "../components/utils/theme-provider";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Suspense fallback={"loading..."}>
          <HydrationBoundary state={pageProps.dehydratedState}>
            <ConfigProvider>
              <Component {...pageProps} />
            </ConfigProvider>
          </HydrationBoundary>
        </Suspense>

        {Boolean(process.env.NEXT_PUBLIC_QUERY_DEV_TOOLS) && (
          <ReactQueryDevtools
            buttonPosition="bottom-left"
            initialIsOpen={false}
          />
        )}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
