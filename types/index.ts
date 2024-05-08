import { MouseEventHandler } from "react"

//Shared 
export interface CustomButtonProps {
    title: string
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit"
}

export interface CardProps {
    data: TvShow;
}

//TvShows
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

export interface Links {
    self: {
        href: string;
    };
    previousepisode: {
        href: string;
        name: string;
    };
    nextepisode: {
        href: string;
        name: string;
    };
}

export interface Externals {
    tvrage: number;
    thetvdb: number;
    imdb: string;
}

export interface Network {
    id: number;
    name: string;
    country: Country;
    officialSite: string | null;
  }

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
        webChannel: null | any; 
        dvdCountry: null | any; 
        externals: Externals;
        image: Image;
        summary: string;
        updated: number;
        _links: Links;
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
    network: Network;
    webChannel: null;
    dvdCountry: null;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
  }