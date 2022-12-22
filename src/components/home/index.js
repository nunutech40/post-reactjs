
import React, {useContext } from 'react'
import {BiSearch} from "react-icons/bi";
import { AuthContext } from '../../App';
import { Navigate } from 'react-router-dom';

export default function Home() {
    const {state} = useContext(AuthContext)

    if(!state.isAuthenticated){
        return <Navigate to="/login" />
    }

    return (
        <section className="px-14 flex-1 pt-14">
            <div className="border border-gray-300 rounded w-full flex py-3 px-3 items-center rounded-xl">
                <BiSearch className="mr-2"/>
                <input type={"text"} className="flex-1" placeholder="Search"/>
            </div>
            <h1>This Is Home</h1>
        </section>
    )
}