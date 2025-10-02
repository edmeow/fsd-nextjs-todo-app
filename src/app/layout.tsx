import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/lib/react-query";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
