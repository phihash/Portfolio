import Header from './header';
import Footer from './footer';
import { Html } from 'next/document';

export default function Layout({ children }) {
  return (
    <Html lang="ja">
      <Header />
      <main>{children}</main>
      <Footer />
    </Html>
  );
}
