import { Episode, Show, TvShow } from "@/types";

export async function fetchTVShows(query: string) {

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const show = await response.json() as Array<TvShow>;
        return show;
    } catch (error) {
        console.error("Fetching error: " + error);
        return null;
    }
}
export async function fetchTvShowById(query: number) {

    const url = `https://api.tvmaze.com/shows/${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const show = await response.json() as Show;
        return show;
    } catch (error) {
        console.error("Fetching error: " + error);
        return null;
    }
}
export async function fetchFullTvSchedule() {

    const url = `https://api.tvmaze.com/schedule/full`;

    try {
        const response = await fetch(url);
        const show = await response.json() as Episode;
        return show;
    } catch (error) {
        console.error("Fetching error: " + error);
        return null;
    }
}
