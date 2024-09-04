import "@/styles/globals.css";
import MainLayout from "@/components/layouts/MainLayout";

export const metadata = {
  title: "Prime PM Consulting",
  description:
    "Enhance your property management with Appfolio expertise. With 20+ years combined of experience, we streamline operations—from bookkeeping and accounting to workflow optimization—to boost your efficiency and profitability.",
    keywords: ["property management", "consulting", "bookkeeping", "accounting", "workflow optimization", "appfolio"],
    author: "Prime PM Consulting",
    creator: [{ name: 'Raul Barriga', url: 'https://github.com/raulbarriga' }],
    generator: "Next.js 14.2.5",
    openGraph: {
      title: "Unlock Your Property Management Potential",
      description: "Expert Appfolio support, bookkeeping, and workflow optimization for property management.",
      // images: [
      //   {
      //     url: 'https://yourwebsite.com/assets/images/hero-image.jpg',
      //     width: 1200,
      //     height: 630,
      //     alt: 'Prime PM Consulting Hero Image',
      //   },
      // ],
      // url: 'https://nextjs.org',
      locale: 'en_US',
    type: 'website',
    siteName: "Prime PM Consulting"
    }
};

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) => {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
