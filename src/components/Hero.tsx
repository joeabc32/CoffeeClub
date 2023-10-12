import Image from 'next/image';
import { useState } from 'react';
import router from 'next/router';
import axios from 'axios';

export function Hero() {
    const [leaderHeader, setLeaderHeader] = useState('Most Cups (Today)');

    const getCupsToday = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/fetchMainLeaders', {
                params: {
                    call: "Most Cups Week"
                }
            });

            const response = res.data.data;
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='mug-container'>
                <Image src='/firebean2.jpg' alt='hero-section-coffee' width={3000} height={3000} id='mug' />
                <div className='steam'>
                    <span className='steamspan1' style={{ animationDelay: 'calc(var(--i) * -0.5s)' }}></span>
                    <span className='steamspan3' style={{ animationDelay: 'calc(var(--i) * -0.5s)' }}></span>
                    <span className='steamspan16' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan5' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan13' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan20' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan6' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan7' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan10' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan8' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan17' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan11' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan12' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan14' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan2' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan9' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan15' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan4' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                    <span className='steamspan19' style={{ animationDelay: 'calc(var(--i)*-0.5s)' }}></span>
                </div>
            </div>
            <div className='absolute min-[2147]:top-96 lg:top-64 top-52 right-0.5 2xl:-translate-x-36 -translate-x-12 heading-box'>
                <div className=' bg-slate-700 rounded-xl p-6 inline-block opacity-90'>
                    <div>
                        <h1 className='2xl:text-6xl lg:text-4xl text-3xl text-white flex justify-center font-bold'>Become King Bean</h1>
                        <p className='text-white py-4 2xl:text-base lg:text-sm hidden lg:flex justify-center'>Where do you stack up against the most degenerate coffee consumers?</p>
                    </div>

                    <div className='2xl:py-6 py-4 flex justify-center lg:gap-16 gap-6'>
                        <button className='bg-slate-400 text-white lg:px-12 px-8 py-2 rounded-md hover:bg-slate-500 lg:text-xl text-base' onClick={() => { router.push('/signup') }}>Register</button>
                        <button className='bg-slate-400 text-white lg:px-6 px-4 py-2 rounded-md hover:bg-slate-500 lg:text-xl text-base' onClick={getCupsToday}>Leaderboard</button>
                    </div>
                    <div></div>
                </div>
                <div className='absolute 2xl:top-96 lg:top-80 top-48 bg-slate-700 rounded-xl opacity-90 lg:pb-8 pb-4 lg:px-3 px-1 my-8'>
                    <div className=' p-6 inline-block 2xl:w-[550px] lg:w-[482px] w-[320px]'>
                        <div>
                            <h1 className='text-white 2xl:text-4xl lg:text-2xl text-lg flex justify-center'>{leaderHeader}</h1>
                        </div>
                        <div className='w-80% bg-gray-300 rounded-3xl lg:h-12 h-10 lg:mt-8 mt-5 overflow-hidden'>
                            <div className='flex justify-between items-center' style={{ width: "97%" }}>
                                <div className='text-2xl rounded-full bg-yellow-400 inline-block lg:p-2 p-1 lg:pr-3.5 pr-2 lg:pl-3 pl-2 font-bold'>
                                    <h2 className=''>1<sup className='tracking-widest text-sm'>st</sup></h2>
                                </div>
                                <div className='2xl:text-2xl lg:text-lg text-base text-black inline-block tracking-wide font-semibold'>
                                    <h3>Alex Lorenc</h3>
                                </div>
                                <div className='inline-block text-black 2xl:text-2xl lg:text-lg text-base'>
                                    <h4>6 cups</h4>
                                </div>
                            </div>
                        </div>

                        <div className='w-80% bg-gray-300 rounded-3xl lg:h-12 h-10 mt-8 overflow-hidden'>
                            <div className='flex justify-between items-center' style={{ width: "97%" }}>
                                <div className='text-2xl rounded-full bg-green-400 inline-block lg:p-2 p-1 font-bold'>
                                    <h2>2<sup className='tracking-widest text-sm'>nd</sup></h2>
                                </div>
                                <div className='2xl:text-2xl lg:text-lg text-base text-black inline-block tracking-wide font-semibold'>
                                    <h3>Jason Yu</h3>
                                </div>
                                <div className='inline-block text-black 2xl:text-2xl lg:text-lg text-base'>
                                    <h4>4.5 cups</h4>
                                </div>
                            </div>
                        </div>

                        <div className='w-80% bg-gray-300 rounded-3xl lg:h-12 h-10 mt-8 overflow-hidden'>
                            <div className='flex justify-between items-center' style={{ width: "97%" }}>
                                <div className='text-2xl rounded-full bg-blue-400 inline-block lg:p-2 p-1 font-bold'>
                                    <h2>3<sup className='tracking-widest text-sm'>rd</sup></h2>
                                </div>
                                <div className='2xl:text-2xl lg:text-lg text-base text-black inline-block tracking-wide font-semibold'>
                                    <h3>Joe Abdallatif</h3>
                                </div>
                                <div className='inline-block text-black 2xl:text-2xl lg:text-lg text-base'>
                                    <h4>2 cups</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}