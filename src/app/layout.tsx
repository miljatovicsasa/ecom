import type { Metadata } from "next";
import ApolloProviderWrapper from "@/lib/apollo/apolloProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { CartProvider } from "@/store/cart";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeRegistry from "@/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "Tire Shop",
  description: "Buy high-quality tires online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <ApolloProviderWrapper>
              {/* <CartProvider> */}
              <Header />
              {children}
              <Footer />
              {/* </CartProvider> */}
            </ApolloProviderWrapper>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
