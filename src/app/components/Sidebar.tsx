"use client"

import React, { ReactNode } from 'react'
import Image from 'next/image'
import vector from "../../../public/Vector.svg"
import menu from "../../../public/menu.svg"
import { sidebarList } from './constants/sidebarList'
import Items from './sidebarcomponents/Items'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const Sidebar = () => {
    const router = useRouter();

    const [toggle, settoggle] = useState(false)
    const [isSelected,setIsSeleceted] = useState("Dashboard")
    console.log(isSelected,752)

    const toggleMenu = () => {
        settoggle(!toggle)
    }

    const handleItemClick = (name: string) => {
        setIsSeleceted(name);
        if(name=="Dashboard"){
            router.push(`/${name.toLowerCase()}/exam`);
        }
    }

    return (
        <div className={`p-5 transition-all duration-500 ${toggle ? 'md:w-16' : 'md:w-64'} h-14 md:h-screen bg-white`}>

            <div className='flex justify-between md:justify-around mb-10'>
                {!toggle && <div className='flex gap-3'>
                    <Image src={vector} alt="vector" />
                    <p className='text-xl font-semibold w-28'>ELT Global</p>
                </div>}
                <div className='flex align-middle' onClick={() => { toggleMenu() }}>
                    <div className='w-5'>
                    <Image src={menu} alt="menu" className=''/>
                    </div>
                </div>

            </div>
            {toggle && <p className={` text-slate-600 ml-2 hidden `}>GENERAL</p>}
            {!toggle && <p className={` text-slate-600 ml-2 `}>GENERAL</p>}
            {sidebarList.map(({ name, icon }: {
                name:string,
                icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
            }) => (
                <Items key={name} name={name} icon={icon} toggle={toggle} isSelected={isSelected === name} onClick={() => handleItemClick(name)}/>
            ))}

        </div>
    )
}

export default Sidebar
 

