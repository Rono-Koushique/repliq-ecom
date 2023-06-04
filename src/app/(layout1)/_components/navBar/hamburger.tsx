"use client";
import React, { useState } from "react";

type Props = {
    addClass?: string;
};

export default function Hamburger({ addClass = "" }: Props) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={addClass}>
            <div
                onClick={() => setOpen((prev) => !prev)}
                className="w-6 aspect-square flex flex-col justify-between overflow-hidden"
            >
                <div
                    className={`relative top-0 w-full h-1 bg-slate-700 rounded-full duration-200 ease-in-out ${
                        open
                            ? "scale-x-[1.35] rotate-45 top-1/2 -translate-y-1/2"
                            : ""
                    }`}
                />
                <div
                    className={`w-full h-1 bg-slate-700 rounded-full duration-200 ease-in-out ${
                        open ? "translate-x-full" : ""
                    }`}
                />
                <div
                    className={`relative bottom-0 w-full h-1 bg-slate-700 rounded-full duration-200 ease-in-out ${
                        open ? "scale-x-[1.35] -rotate-45 bottom-1/2 translate-y-1/2" : ""
                    }`}
                />
            </div>
        </div>
    );
}
