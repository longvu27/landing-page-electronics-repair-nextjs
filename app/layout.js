import thumbnail from '@/public/thumbnail.jpg';
import "../styles/globalsStyle.scss";
import { Roboto } from "next/font/google";
import Layout from '@/src/components/layout/Layout';
import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next"

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
});


export const metadata = {
  metadataBase: new URL(`https://diennuocdienlanhthanhhoa.com/`),
  title: "Dịch Vụ Điện Nước, Điện Lạnh Thanh Hóa",
  description: "Chuyên sửa chữa, bảo trì điện nước, điện lạnh tại Thanh Hóa. Dịch vụ uy tín, chuyên nghiệp, hỗ trợ nhanh 24/7. Cam kết chất lượng, giá tốt nhất!",
  keywords: "sửa chữa điện nước, sửa chữa điện lạnh, sửa tivi, sửa máy lạnh, sửa tủ lạnh, máy lọc nước",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Dịch Vụ Điện Nước, Điện Lạnh Thanh Hóa",
    description: "Chuyên sửa chữa, bảo trì điện nước, điện lạnh tại Thanh Hóa. Dịch vụ uy tín, chuyên nghiệp, hỗ trợ nhanh 24/7. Cam kết chất lượng, giá tốt nhất!",
    images: [
      {
        url: thumbnail.src,
        width: 1200,
        height: 630,
        alt: "Dịch Vụ Điện Nước Điện Lạnh Thanh Hoá",
      },
    ],
  },

  alternates: {
    canonical: "https://diennuocdienlanhthanhhoa.com/",
    languages: {
      vi: "https://diennuocdienlanhthanhhoa.com/",
      "x-default": "https://diennuocdienlanhthanhhoa.com/",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <meta name="google-site-verification" content="0DpO_pFQW6LPcpkBPQlslkCsWHv_QzzZYaV2A_D6Dro" />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-51QJKG19ET"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-51QJKG19ET');
          `}
        </Script>
      </head>
      <body className={roboto.variable}>
        <Layout>
          {children}
        </Layout>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dịch Vụ Điện Nước, Điện Lạnh Thanh Hóa",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Thanh Hóa",
                "addressCountry": "VN"
              },
              "telephone": "+84342886598",
              "openingHours": "Mo-Su 08:00-22:00",
              "description": "Chuyên sửa chữa, bảo trì điện nước, điện lạnh tại Thanh Hóa. Dịch vụ uy tín, chuyên nghiệp, hỗ trợ nhanh 24/7. Cam kết chất lượng, giá tốt nhất!",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1527"
              }
            })
          }}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
