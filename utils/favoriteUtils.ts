import { useState, useEffect } from 'react';
import { TvShow, Favorites } from '@/types';

export const loadFavoritesFromStorage = (): Favorites[] => {
    if (typeof window !== 'undefined') {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    } else {
        return [];
    }
};

export const saveFavoritesToStorage = (favoritesList: Favorites[]): void => {
    localStorage.setItem('favorites', JSON.stringify(favoritesList));
};

export const useFavorites = () => {
    const [favoritesList, setFavoritesList] = useState<Favorites[]>(loadFavoritesFromStorage);

    const toggleFavorite = (id: number, shows: TvShow[]) => {
        const addShow = shows.find(show => show.show.id === id);
        if (!addShow) return;

        setFavoritesList(prevFavoritesList => {
            const isFavorite = prevFavoritesList.some(favorite => favorite.id === id);
            if (isFavorite) {
                return prevFavoritesList.filter(favorite => favorite.id !== id);
            } else {
                if (addShow.show.image) {
                    return [
                        ...prevFavoritesList,
                        {
                            id: addShow.show.id,
                            name: addShow.show.name,
                            image: addShow.show.image?.original,
                        },
                    ];
                } else {
                    return [
                        ...prevFavoritesList,
                        {
                            id: addShow.show.id,
                            name: addShow.show.name,
                        },
                    ];
                }
            }
        });
    };

    useEffect(() => {
        saveFavoritesToStorage(favoritesList);
    }, [favoritesList]);

    return { favoritesList, toggleFavorite };
};
