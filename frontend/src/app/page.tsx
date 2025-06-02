import OutlinedCard from "@/components/ui/OutlinedCard";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-6">
      <div className="flex gap-6 w-full max-w-6xl mx-auto mb-6 mt-6">
          <div className="flex-1"><OutlinedCard /></div>
          <div className="flex-1"><OutlinedCard /></div>
          <div className="flex-1"><OutlinedCard /></div>
        </div>
      </main>
    </div>
  );
}
