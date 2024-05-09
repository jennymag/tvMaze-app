

import { useState, useEffect } from 'react';
import { TvShow } from '@/types';

export const loadFavoritesFromStorage = (): TvShow[] => {
    if (typeof window !== 'undefined') {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    } else {
        return [];
    }
};

export const saveFavoritesToStorage = (favoritesList: TvShow[]): void => {
    localStorage.setItem('favorites', JSON.stringify(favoritesList));
};

export const useFavorites = () => {
    const [favoritesList, setFavoritesList] = useState<TvShow[]>(loadFavoritesFromStorage);

    const toggleFavorite = (id: number, shows: TvShow[]) => {
        const addShow = shows.find(show => show.show.id === id);
        if (!addShow) return;

        setFavoritesList(prevFavoritesList => {
            const isFavorite = prevFavoritesList.some(favorite => favorite.show.id === id);
            if (isFavorite) {
                return prevFavoritesList.filter(favorite => favorite.show.id !== id);
            } else {
                return [...prevFavoritesList, addShow];
            }
        });
    };

    useEffect(() => {
        saveFavoritesToStorage(favoritesList);
    }, [favoritesList]);

    return { favoritesList, toggleFavorite };
};