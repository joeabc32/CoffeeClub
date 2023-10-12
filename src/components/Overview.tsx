import axios from "axios";
import MyLog from "./MyLog";
import Footer from "./Footer";
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react";
import Global from "./Global";



function Overview() {

    const session = useSession();
    const email = session.data?.user?.email;
    const [cups, setCups] = useState(null);
    const [activePage, setActivePage] = useState('dashboard')

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/getUserData', {
                params: {
                    email: email,
                }
            });
            if (res.status === 200) {
                const newCups = res.data.cups;
                setCups(newCups);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDataUpdate = () => {
        fetchData(); // Refetch data
    };

    const components: Record<string, JSX.Element> = {
        dashboard: <MyLog onDataUpdate={handleDataUpdate} />,
        global: <Global onDataUpdate={handleDataUpdate} />
    }


    return (
        <div>
            <div className=" pt-10 pb-48" style={{ backgroundColor: "#424242" }}>
                <h2 className="text-3xl pl-10 pb-4 text-gray-300">Welcome back, {session.data?.user?.name}</h2>
                <div className="grid grid-cols-12">
                    <div className="col-span-2 bg-slate-400 ml-4">
                        <div className="flex gap-8 mx-4 p-2 mt-14 items-center  bg-yellow-100 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 ml-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                            </svg>
                            <a className="text-2xl">Dashboard</a>
                        </div>
                        <div className="flex justify-start text-lg pl-16 mt-4">
                            <a onClick={() => { setActivePage('dashboard') }} className="flex gap-4 cursor-pointer"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279" />
                            </svg>My Log</a>
                        </div>
                        <div className="flex justify-start text-lg pl-16 mt-8">
                            <a onClick={() => { setActivePage('global') }} className="flex gap-4 cursor-pointer"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                            </svg>Global</a>
                        </div>
                        <div className="flex gap-8 my-4 mx-4 p-2 rounded-full items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 ml-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                            </svg>

                            <a className="text-2xl">Analytics</a>
                        </div>

                        <div className="flex gap-8 my-4 mx-4 p-2 rounded-full items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 ml-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>

                            <a className="text-2xl">Social</a>
                        </div>
                    </div>

                    <div className="col-span-10 main-page">
                        {components[activePage]}
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Overview;