"use client";
import Image from "next/image";
import React from "react";

type Props = {
    images: string[];
};

export default function Gallery({ images }: Props) {
    const [currentId, setCurrentId] = React.useState(0);
    return (
        <div className="flex gap-8">
            <div className="flex flex-col gap-1">
                {images.slice(0, 4).map((image, idx) => {
                    return (
                        <div
                            key={idx}
                            className={`w-fit cursor-pointer border-2 p-0.5 ${
                                currentId === idx
                                    ? "border-gray-700"
                                    : "border-transparent hover:border-gray-300"
                            }`}
                            onClick={() => setCurrentId(idx)}
                        >
                            <Image
                                className="object-cover w-[70px] h-[100px]"
                                src={image}
                                width={70}
                                height={100}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
            <div className="w-full bg-white h-fit border border-gray-300 p-0.5">
                <Image
                    className="object-cover w-full h-[600px]"
                    src={images[currentId]}
                    width={600}
                    height={600}
                    alt=""
                />
            </div>
        </div>
    );
}
