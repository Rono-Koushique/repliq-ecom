import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = {
    rating: number;
};

export default function RatingViewer({ rating }: Props) {
    return (
        <>
            {Array(rating)
                .fill("")
                .map((_, i) => {
                    return (
                        <AiFillStar
                            className="text-xl text-yellow-600"
                            key={i}
                        />
                    );
                })}
            {Array(5 - rating)
                .fill("")
                .map((_, i) => {
                    return (
                        <AiOutlineStar
                            className="text-xl text-yellow-600"
                            key={i}
                        />
                    );
                })}
        </>
    );
}
