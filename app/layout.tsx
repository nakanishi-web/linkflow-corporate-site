// @ts-ignore CSS side-effect imports are handled by the framework bundler.
import "./styles/globals.css";

export const metadata = {
  title: "LinkFlow",
  description: "クラウドCRMサービス LinkFlow"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
