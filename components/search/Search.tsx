"use client";
import { useState } from "react";
import { Card, SearchBar } from "..";
import { fetchTVShows } from "@/utils";
import { TvShow } from "@/types";
import { useFavorites } from "@/utils/favoriteUtils";

const Search = () => {
  const [shows, setShows] = useState<TvShow[]>([]);
  const { favoritesList, toggleFavorite } = useFavorites();

  const handleSearch = async (query: string) => {
    const data: TvShow[] | null = await fetchTVShows(query);
    if (data && data.length > 0) {
      setShows(data);
    } else {
      setShows([]);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <div className="flex flex-wrap justify-center mx-16">
        {shows.map((show, index) => (
          <Card
            key={`${show.show.id}-${index}`}
            data={show}
            isFavorite={favoritesList.some(
              (favorite) => favorite.show.id === show.show.id
            )}
            onToggleFavorite={() => toggleFavorite(show.show.id, shows)}
          />
        ))}
      </div>
    </>
  );
};

export default Search;
