"use client";
import { useState, useEffect } from "react";
import { useFavorites } from "@/utils/favoriteUtils";
import { Episode } from "@/types";
import { fetchFullTvSchedule } from "@/utils";
import { convertDateString } from "@/utils";
import Link from "next/link";

const Upcoming = () => {
  const { favoritesList } = useFavorites();
  const [upcomingFavorites, setUpcomingFavorites] = useState<Episode[]>([]);

  useEffect(() => {
    const fetchUpcomingEpisodes = async () => {
      try {
        const data = (await fetchFullTvSchedule()) as Episode[] | null;

        if (data && favoritesList) {
          const upcomingForFavorites = data.filter(
            (episode) =>
              episode._embedded.show &&
              favoritesList.some(
                (fav) => fav.show && fav.show.id === episode._embedded.show.id
              )
          );

          setUpcomingFavorites(upcomingForFavorites);
        } else {
          setUpcomingFavorites([]);
        }
      } catch (error) {
        console.error("Error fetching upcoming episodes:", error);
      }
    };

    fetchUpcomingEpisodes();
  }, [favoritesList]);

  return (
    <div className="flex flex-wrap flex-col justify-center mx-16 my-8">
      {upcomingFavorites.map((episode) => (
        <Link  href={`/${episode._embedded.show.id}`} key={episode.id}>
        <div className="my-2 border py-6 px-16 shadow" >
          <h2 className="text-lg font-bold">{episode._embedded.show.name}</h2>
          <p>{episode.name}</p>
          <p>Airing on{convertDateString(episode.airstamp)}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Upcoming;
