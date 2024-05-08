import { Favorites } from "@/components";

export default function Details() {
  return (
    <main className="overflow-hidden z-1">
      <div className="flex flex-col items-center my-16">
        <h1 className="text-2xl font-bold">Favorites</h1>
        <p>View your favorite TV shows</p>
        <Favorites />
      </div>
    </main>
  );
}
