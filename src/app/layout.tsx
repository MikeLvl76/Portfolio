import { Metadata } from "next";
import "./globals.css";
import { CompleteNavbar } from "@/components/navbar";
import {
  LocaleProvider,
  ThemeProvider,
  ToastProvider,
} from "@/components/providers";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col justify-start antialiased max-w-screen min-h-screen bg-bg-light dark:bg-bg-dark`}
      >
        <ToastProvider>
          <ThemeProvider>
            <LocaleProvider>
              <CompleteNavbar />
              {children}
            </LocaleProvider>
          </ThemeProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
