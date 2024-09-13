"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import "../../public/irancell/font.css";
import irancell from "../utils/constants/localFont";
// import type { Metadata } from 'next'


// export const metadata: Metadata = {
//   title: 'My Dashboard',
//   description: '...',
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa " dir="rtl" className={`${irancell.variable} font-sans `} >
      <body>
        <ThemeProvider theme={baselightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
