"use client";
import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/types";

// Card.tsx
const Card: React.FC<
  CardProps & { isFavorite: boolean; onToggleFavorite: (id: number) => void }
> = ({ data, isFavorite, onToggleFavorite }) => {
  return (
    <div className="mx-2 w-full  md:w-1/4 lg:w-1/6 mb-4 shadow">
      <button
        className="text-4xl text-red-800 bg-white p-2 absolute z-2"
        onClick={() => onToggleFavorite(data.show.id)}
      >
        {isFavorite ? <span>&#9829;</span> : <span>&#9825;</span>}
      </button>
      <Link href={`/${data?.show.id}`}>
        {data.show.image ? (
          <Image
            className="w-full"
            src={data.show.image.medium}
            width={213}
            height={299}
            style={{ width: "100%", height: "auto" }}
            alt="TV show cover"
          />
        ) : null}
        <div className="px-6 py-4 ">
          <div className="font-bold text-xl mb-2">{data?.show.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
