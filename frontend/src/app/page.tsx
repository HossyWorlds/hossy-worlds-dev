import OutlinedCard from "@/components/ui/OutlinedCard";
import BlogArticleList from "@/components/BlogArticleList";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-6">
        <div className="flex flex-wrap md:flex-nowrap gap-6 w-full max-w-6xl mx-auto mb-6 mt-6">
          <div className="w-full md:flex-1"><OutlinedCard /></div>
          <div className="w-full md:flex-1"><OutlinedCard /></div>
          <div className="w-full md:flex-1"><OutlinedCard /></div>
        </div>
      </main>
      <section className="w-full max-w-6xl mx-auto bg-gray-100 rounded-lg min-h-[400px] flex items-center justify-center py-12">
        <BlogArticleList />
      </section>
    </div>
  );
}
