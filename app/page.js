import { Dashboard, DashContinue } from "@/components";

export default function Home() {
  return (      
      <main className="flex flex-col gap-40">
        <Dashboard />
        <DashContinue />
      </main>
  );
}
