"use client";

import { FormEvent, useState } from "react";
import { CustomButton, Card } from "..";
import { fetchTVShows } from "@/utils";
import { TvShow } from "@/types";


const Search = () => {
    const [shows, setShows] = useState<TvShow[]>([]);

    const handleSearch = async (query: string) => {
        const data: TvShow[] | null = await fetchTVShows(query); 
        if (data && data.length > 0) {
            setShows(data);
        } else {
            setShows([]);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const query = formData.get('query') as string;
        await handleSearch(query);
    };


  return (
    <>
            <form className="my-8" onSubmit={handleSubmit}>
                <input type="text" className="rounded-full p-2 px-5" name="query" />
                <CustomButton 
                title="Search" 
                btnType="submit"
                containerStyles="text-white rounded-full py-2 bg-slate-700 mx-2 min-w-[130px]" />
            </form>
       
            <div className="flex flex-wrap justify-center mx-16">
                {shows.map((show, index) => (
                    <Card key={`${show.show.id}-${index}`} data={show}/>
                    
                ))}
            </div>
       </>
  
  )
}

export default Search;
