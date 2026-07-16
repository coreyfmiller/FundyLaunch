import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Fundy Launch | Web Design & Marketing for Local Businesses',
  description:
    'We help Atlantic Canadian contractors and local businesses get found on Google, Maps, and AI Search with high-performing websites and local SEO that generate more calls and customers.',
  openGraph: {
    title: 'Fundy Launch | Web Design & Marketing for Local Businesses',
    description:
      'We help Atlantic Canadian contractors and local businesses get found on Google, Maps, and AI Search.',
    url: 'https://fundylaunch.com',
    siteName: 'Fundy Launch',
    images: [
      {
        url: 'https://fundylaunch.com/og-image.png',
        width: 1730,
        height: 909,
        alt: 'Fundy Launch — Web Design & Marketing for Local Businesses',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fundy Launch | Web Design & Marketing for Local Businesses',
    description:
      'We help Atlantic Canadian contractors and local businesses get found on Google, Maps, and AI Search.',
    images: ['https://fundylaunch.com/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://fundylaunch.ca/#business",
        name: "Fundy Launch",
        url: "https://fundylaunch.ca",
        description:
          "Web design and local marketing agency helping Atlantic Canadian contractors and service businesses get found on Google, Maps, and AI Search.",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Atlantic Canada",
        },
        serviceType: ["Web Design", "Local SEO", "AI Search Optimization"],
      },
      {
        "@type": "WebSite",
        "@id": "https://fundylaunch.ca/#website",
        url: "https://fundylaunch.ca",
        name: "Fundy Launch",
        publisher: { "@id": "https://fundylaunch.ca/#business" },
        inLanguage: "en-CA",
      },
    ],
  }

  return (
    <html lang="en" className={`bg-background light ${inter.variable} ${jakarta.variable}`}>
      <head>
        <meta name="google-site-verification" content="UQZpO4FDMn797WmV0K5S4351gZB2Qv9ASKh1L5W-3ck" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
