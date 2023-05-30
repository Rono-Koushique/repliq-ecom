import React from "react";
import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

type Props = {};

const style =
    "focus:shadow-[0_0_12px_0] focus:shadow-slate-200 focus-within:outline-slate-500";

export default function SearchField() {
    return (
        <div className="flex-1 flex items-center border-2 border-slate-200 rounded-full  focus-within:border-slate-500">
            <input
                className="outline-none w-full rounded-l-full leading-none px-6 sm:px-8 py-4 text-sm"
                placeholder="Search for items, brands"
            />
            <div className="bg-white self-stretch pl-1 pr-4 sm:pr-6 rounded-r-full flex items-center">
                <BiSearchAlt className="text-2xl text-slate-500" />
            </div>
        </div>
    );
}
