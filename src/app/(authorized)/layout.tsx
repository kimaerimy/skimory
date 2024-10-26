import NavBar from "@/components/_common/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="container mx-auto h-full max-w-4xl px-6 py-12 bg-slate-200">
        {children}
      </main>
      <NavBar />
    </>
  );
}
