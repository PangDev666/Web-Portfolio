
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "./components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Banthoon",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:text-white dark:bg-darkTheme `} /*antialiased leading-8 overflow-x-hidden dark:text-white dark:bg-darkTheme */
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
