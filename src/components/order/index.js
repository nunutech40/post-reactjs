import React from "react";
import Sidebar from "../sidebar";
import {BiSearch} from "react-icons/bi";

export default function Order() {
    return (
        <section className="w-full flex flex-wrap">
            <Sidebar/>
            <div className="px-14 flex-1 pt-14">
                <h1>This is Order</h1>
            </div>

        </section>
    )
}