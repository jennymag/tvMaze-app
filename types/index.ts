import { MouseEventHandler } from "react"

//shared 
export interface CustomButtonProps {
    title: string
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
}

export interface CardProps {
    data: TvShow;
}

export interface SearchBarProps {
    onSubmit: (query: string) => void;
}

//TvShows
export interface TvShow {
    score: number;
    show: {
        id: number;
        url: string;
        name: string;
        type: string;
        language: string;
        genres: string[];
        status: string;
        runtime: number;
        averageRuntime: number;
        premiered: string;
        ended: string | null;
        officialSite: string;
        schedule: Schedule;
        rating: Rating;
        weight: number;
        image: Image;
        summary: string;
        updated: number;
    };
}

export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string | null;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    image: Image;
    summary: string;
    updated: number;
}

export interface Schedule {
    time: string;
    days: string[];
}

export interface Rating {
    average: number;
}

export interface Country {
    name: string;
    code: string;
    timezone: string;
}

export interface Image {
    medium: string;
    original: string;
}



//Upcoming
export interface Episode {
    id: number;
    name: string;
    season: number;
    airstamp: string;
    nextEpisode: {
        name: string;
    } | null;
    _embedded: {
        show: {
            id: number;
            name: string;
        }
    };
}
