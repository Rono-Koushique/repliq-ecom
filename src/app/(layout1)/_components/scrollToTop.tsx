"use client";
import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

type Props = {};

export default function ScrollToTop({}: Props) {
    return (
        <div className="fixed bottom-2 right-2">
            <BsArrowUpCircleFill className="text-[3rem] text-slate-300" />
        </div>
    );
}
