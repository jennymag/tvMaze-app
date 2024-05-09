"use client";
import { Card } from "../";
import { useFavorites } from "@/utils/favoriteUtils";

const Favorites = () => {
  const { favoritesList, toggleFavorite } = useFavorites();

  return (
    <div className="flex flex-wrap justify-center mx-16 my-8">
      {favoritesList.map((favorite, index) => (
        <Card
          key={`${favorite.show.id}-${index}`}
          data={favorite}
          isFavorite={true}
          onToggleFavorite={() =>
            toggleFavorite(favorite.show.id, favoritesList)
          }
        />
      ))}
    </div>
  );
};

export default Favorites;
