import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

interface DashboardProps {
    onDataUpdate: () => void;
}

function Global({ onDataUpdate }: DashboardProps) {

    const session = useSession();

    //Save fetched Global Bean Feed data here.
    const [globalData, setGlobalData] = useState(null);

    useEffect(() => {
        getGlobalData();
    }, []);

    //Get Global Coffee Feed Data
    const getGlobalData = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/getEntries', {
                params: {
                    email: session.data?.user?.email,
                }
            });
            setGlobalData(res.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="grid grid-cols-10" style={{ backgroundColor: "#212121" }}>
            <div className=" col-span-6 mt-8 ml-12">
                <h1 className="text-3xl flex justify-center text-yellow-200">Global Bean Feed</h1>
                <div className="flex justify-center mt-2 mb-8">
                    <div className="bg-gray-600 rounded-sm mx-8 mb-48 w-full text-center overflow-hidden">
                        {globalData !== null && (
                            <table className="table-auto text-purple-100 w-full">
                                <thead>
                                    <tr className="text-lg tracking-widest">
                                        <th className="w-3/12">Timestamp</th>
                                        <th className="w-3/12">User</th>
                                        <th className="w-1/12">Ounces</th>
                                        <th className="w-3/12">Type</th>
                                        <th className="w-1/12">Edit</th>
                                        <th className="w-1/12">Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="w-full text-sm tracking-wider">
                                    {globalData.map((item, index) => {
                                        const timestampDate = new Date(item.timestamp);
                                        const formatDate = `${timestampDate.toLocaleDateString()} ${timestampDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                                        return (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-500' : ''} >
                                                <td>{formatDate}</td>
                                                <td>{item.name}</td>
                                                <td>{item.ounces}</td>
                                                <td>{item.roast}</td>
                                                <td><svg className="w-4 h-4 text-yellow-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                    <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                                                    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                                                </svg></td>
                                                <td><svg className="w-4 h-4 text-red-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                                                </svg></td>
                                            </tr>
                                        );
                                    })}
                                    <tr className="text-yellow-200 text-lg" >
                                        <td className="flex justify-center w-4/12">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                            </svg>
                                        </td>
                                        <td className="w-4/12"><p className="cursor-pointer">Return to Top</p></td>
                                        <td className="flex justify-center  w-4/12">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Global;