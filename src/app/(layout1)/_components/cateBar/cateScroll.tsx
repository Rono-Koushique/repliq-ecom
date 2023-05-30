import React from "react";

type Props = {
    categories: string[];
};

export default function CateScroll({ categories }: Props) {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="flex w-fit marquee">
                {categories &&
                    categories.sort().map((category: string, idx: number) => {
                        return (
                            <div
                                className="bg-slate-200 self-stretch flex items-center px-4 py-2 capitalize text-xs text-slate-400 md:text-slate-500 font-semibold text-center whitespace-nowrap cursor-pointer hover:bg-slate-300"
                                key={idx}
                            >
                                {category}
                            </div>
                        );
                    })}
            </div>
            <div className="absolute top-0 left-px flex w-fit marquee2">
                {categories &&
                    categories.sort().map((category: string, idx: number) => {
                        return (
                            <div
                                className="bg-slate-200 self-stretch flex items-center px-4 py-2 capitalize text-xs text-slate-400 md:text-slate-500 font-semibold text-center whitespace-nowrap cursor-pointer hover:bg-slate-300"
                                key={idx}
                            >
                                {category}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
