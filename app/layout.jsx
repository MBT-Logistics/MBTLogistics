import { Analytics } from "@vercel/analytics/react";

import { Footer, Navbar } from "@/components";
import "./globals.css";
import Provider from "@/components/Provider";

export const metadata = {
  title: "MBT Logistics",
  description: "Your one stop logistics solution",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <Navbar />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </Provider>
    </body>
  </html>
);

export default RootLayout;
