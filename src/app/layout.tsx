import { Metadata } from "next";
import "./globals.css";
import { CompleteNavbar } from "@/components/navbar";
import { LocaleProvider, ThemeProvider } from "@/components/providers";

export const metadata: Metadata = {
  title: "Portfolio",
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
        className={`flex flex-col justify-start antialiased max-w-screen min-h-screen dark:bg-slate-900`}
      >
        <ThemeProvider>
          <LocaleProvider>
            <CompleteNavbar />
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
