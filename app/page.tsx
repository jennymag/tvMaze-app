import { Search } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden z-1">
      <div className="flex flex-col items-center my-16">
        <h1 className="text-2xl font-bold">Tv Catalogue </h1>
        <p>Search to explore TV shows</p>
        <Search />
      </div>
    </main>
  );
}
