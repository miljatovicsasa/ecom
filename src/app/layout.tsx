import type { Metadata } from 'next';
import ApolloProviderWrapper from '@/lib/apollo-provider';
import { CartProvider } from '@/store/cart';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeRegistry from '@/theme/ThemeRegistry'; // Import the new wrapper

export const metadata: Metadata = {
  title: 'Tire Shop',
  description: 'Buy high-quality tires online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ThemeRegistry>
          <ApolloProviderWrapper>
            <CartProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </CartProvider>
          </ApolloProviderWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
