import "@/styles/globals.css";
import MainLayout from "@/components/layouts/MainLayout";

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
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
