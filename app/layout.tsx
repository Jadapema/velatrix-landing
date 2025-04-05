import type { Metadata } from 'next';
import Providers from '@/components/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Velatrix - Web3 Technology for the Next-Gen Creative IP',
  description: 'At Velatrix, we are architecting the technological backbone of the next digital content era, unlocking new possibilities for creators, audiences, and distributors, setting a standard for innovation in the industry',
  authors: [{ name: 'Velatrix' }],
  openGraph: {
    title: 'Velatrix - Web3 Technology for the Next-Gen Creative IP',
    description: 'At Velatrix, we are architecting the technological backbone of the next digital content era, unlocking new possibilities for creators, audiences, and distributors, setting a standard for innovation in the industry',
    type: 'website',
    images: [{ url: 'https://velatrix-landing.onrender.com/placeholder.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://velatrix-landing.onrender.com/placeholder.jpeg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5C5ZY2395Z"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5C5ZY2395Z');
            `,
          }}
        />
        <script
          src="https://cdn.gpteng.co/gptengineer.js"
          type="module"
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 