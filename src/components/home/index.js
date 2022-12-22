
import React, {useContext } from 'react'
import {BiSearch} from "react-icons/bi";
import { AuthContext } from '../../App';
import { Navigate } from 'react-router-dom';
import Sidebar from "../sidebar";

export default function Home() {
    const {state} = useContext(AuthContext)


    return (
        <section className="w-full flex flex-wrap">
            <Sidebar/>
            <div className="px-14 flex-1 pt-14">
                <div className="border border-gray-300 rounded w-full flex py-3 px-3 items-center rounded-xl">
                    <BiSearch className="mr-2"/>
                    <input type={"text"} className="flex-1" placeholder="Search"/>
                </div>
                <h1>This is home</h1>
            </div>

        </section>
    )
}