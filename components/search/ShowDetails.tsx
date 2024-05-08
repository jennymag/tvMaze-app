"use client";

import { useState, useEffect } from "react";
import { fetchTvShowById } from "@/utils";
import { Show } from "@/types";
import Image from "next/image";

const ShowDetails = ({ showId }: { showId: number }) => {
  const [show, setShow] = useState<Show | null>(null);

  useEffect(() => {
    const fetchShow = async () => {
      const data: Show | null = await fetchTvShowById(showId);
      if (data) {
        setShow(data); //
      } else {
        setShow(null);
      }
    };

    fetchShow();
  }, [showId]);

  return (
    <main>
      {show ? (
        <div className="flex flex-row mx-40 my-20">
           <div className="mx-6">
            <Image
              alt="TV Show Cover"
              src={show.image.original}
              width={900}
              height={1800}
            />
          </div>
          <div className="w-full my-10">
            <h3 className="font-bold">Name:</h3>
            <p>{show.name} </p>
            <h3 className="font-bold">Summary:</h3>
            <p>{show.summary?.replace(/(<([^>]+)>)/gi, '')} </p>
            <h3 className="font-bold">Genres:</h3>
            <p>{show.genres} </p>
            <h3 className="font-bold">Rating:</h3>
            <p>{show.rating.average} </p>
            <h3 className="font-bold">Language:</h3>
            <p>{show.language} </p>
            <h3 className="font-bold">Premiered:</h3>
            <p>{show.premiered} </p>
          </div>
         
        </div>
      ) : null}
    </main>
  );
};

export default ShowDetails;
