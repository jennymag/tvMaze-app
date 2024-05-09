import { ShowDetails } from "@/components";

export default function SearchDetailsPage({ params }: { params: { showId: number } }) {
  return (
    <main className="overflow-hidden z-1">
      <div className="my-16">
        <ShowDetails showId={params.showId} />
      </div>
    </main>
  );
};


