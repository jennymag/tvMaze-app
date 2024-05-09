import { Upcoming } from "@/components";

export default function UpcomingPage() {
  return (
    <main className="overflow-hidden z-1">
      <div className="flex flex-col items-center my-16">
        <h1 className="text-2xl font-bold">Upcoming episodes</h1>
        <p>Upcoming episodes of your favorites</p>
        <Upcoming />
      </div>
    </main>
  );
}
