import { BackButton } from "@/components/_common/BackButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BackButton />
      {children}
    </div>
  );
}
