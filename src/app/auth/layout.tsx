import Footer from "@/components/_common/Footer";
import Header from "@/components/_common/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
