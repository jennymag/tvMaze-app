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
        setShow(data);
      } else {
        setShow(null);
      }
    };

    fetchShow();
  }, [showId]);

  return (
    <>
      {show ? (
        <div className="flex flex-row mx-40 my-20">
          <div className="mx-6">
            <Image
              alt="TV Show Cover"
              src={show.image.original}
              width={900}
              height={1800}
              priority
            />
          </div>
          <div className="w-full my-10">
            <h2 className="font-bold">Name:</h2>
            <p>{show.name} </p>
            <h2 className="font-bold">Summary:</h2>
            <p>{show.summary?.replace(/(<([^>]+)>)/gi, "")} </p>
            <h2 className="font-bold">Genres:</h2>
            <p>{show.genres} </p>
            <h2 className="font-bold">Rating:</h2>
            <p>{show.rating.average} </p>
            <h2 className="font-bold">Language:</h2>
            <p>{show.language} </p>
            <h2 className="font-bold">Premiered:</h2>
            <p>{show.premiered} </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ShowDetails;
