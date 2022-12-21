import React from "react";
import {BiSearch} from "react-icons/bi";

export default function Content() {
    return (
        <section className="px-14 flex-1 pt-14">
            <div className="border border-gray-300 rounded w-full flex py-3 px-3 items-center rounded-xl">
                <BiSearch className="mr-2"/>
                <input type={"text"} className="flex-1" placeholder="Search"/>
            </div>
        </section>
    )
}