import { useState } from "react";
import logo from 'public/Logo.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { signIn, useSession, signOut } from "next-auth/react"

export function Navbar() {
    const router = useRouter();
    const [mobileMenu, setMobileMenu] = useState('close');
    const [menuDropdown, setMenuDropdown] = useState('top-[-100%]');
    const onToggleMenu = (event: React.MouseEvent) => {
        if (mobileMenu === 'close') {
            setMobileMenu('open');
            setMenuDropdown('top-[12%]');
        } else {
            setMobileMenu('close');
            setMenuDropdown('top-[-100%]');
        }
    };

    const session = useSession();

    return (
        <nav className='flex justify-between items-center w-[98vw] pl-10 navigation'>
            <Image src={logo} width={60} alt="logo" />
            <div className={`navigation md:static absolute bg-white md:min-h-fit min-h-[15vh] left-0 ${menuDropdown} md:w-auto w-full flex items-center px-5 py-4 z-20`}>
                <ul className='flex md:flex-row flex-col md:items-center 2xl:gap-[10vw] lg:gap-[6vw] gap-8'>
                    <li>
                        <a className='hover:text-slate-400 text-xl' href='#' onClick={() => { router.push('/') }}>Home</a>
                    </li>
                    <li>
                        <a className='hover:text-slate-400 text-xl' href='#' onClick={() => { router.push('/mydash') }}>Leaderboards</a>
                    </li>
                    <li>
                        <a className='hover:text-slate-400 text-xl' href='#about-section'>About Us</a>
                    </li>
                    <li>
                        <a className='hover:text-slate-400 text-xl' href='#'>Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                {!session.data && <button className='bg-slate-400 text-white px-6 py-2 rounded-md hover:bg-slate-700 text-xl mr-8 sign-button' onClick={() => signIn()}>Sign in</button>}
                {session.data && <div className="flex text-center items-center"><h1>Welcome {session.data?.user?.name as String}</h1><button className='bg-slate-400 text-white px-6 py-2 ml-2 rounded-md hover:bg-slate-700 text-xl mr-8 sign-button' onClick={() => signOut()}>Sign out</button></div>}
                {mobileMenu === 'close' && (
                    <button onClick={onToggleMenu} className="md:hidden pr-4 menu-icon" id='mobile-menu-open'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg></button>)}
                {mobileMenu === 'open' && (
                    <button onClick={onToggleMenu} className="md:hidden pr-4 menu-icon" id='mobile-menu-close'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                )}
            </div>
        </nav >
    );
}
