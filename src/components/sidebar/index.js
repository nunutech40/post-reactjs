import React from "react";
import Logo from "../../assets/logo.svg";
import {BiHomeAlt} from "react-icons/bi";
import {MdOutlineCallToAction, MdOutlineMonetizationOn} from "react-icons/md";
import {RiProductHuntLine} from "react-icons/ri"
import {AiOutlineSetting} from "react-icons/ai"

export default function Sidebar() {

    const menu = [
        {name:"Home", icon:<BiHomeAlt/>},
        {name:"Order", icon:<MdOutlineCallToAction/>},
        {name:"Produk", icon:<RiProductHuntLine/>},
        {name:"Keuangan", icon:<MdOutlineMonetizationOn/>},
        {name:"Pengaturan", icon:<AiOutlineSetting/>}
    ]

    return <div className="h-screen border-r border-gray-200 w-56 px-9 py-9 space-y-20">
        <div className="flex flex-row items-center">
            <img src={Logo} alt="react" className="w-9 h-9"/>
            <div>Pos Cafe</div>
        </div>
        <div className="space-y-24">
            <div>
                <div className="font-bold mb-7">Menu</div>
                <ul className="space-y-7">
                    {
                        menu.map((val, index) => {
                            return (
                                <li key={index} className="mb-7 flex flex-row items-center">
                                    <div className="mr-5">{val.icon}</div>
                                    <div>{val.name}</div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>

    </div>
}