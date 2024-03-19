import '@/app/ui/global.css';
import { poor_story } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poor_story.className} antialiased`}>{children}</body>
    </html>
  );
}
