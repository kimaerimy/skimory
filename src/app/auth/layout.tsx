import Footer from "@/components/_common/Footer";
import Header from "@/components/_common/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mx-auto h-full max-w-4xl px-6 py-12">
        {children}
      </main>
      <Footer />
    </>
  );
}
