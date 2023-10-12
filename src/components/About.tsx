import Image from "next/image";

function About() {
    return (
        <div className="bg-slate-100" id="about-section">
            <h1 className="tracking-widest text-6xl text-center pt-16">Our Tribe</h1>
            <div className="pt-6">
                <p className="pt-6 text-center text-lg">We are a community of coffee abusers. Competition breeds excellence, and we strive for greatness everyday. <br />
                    Join our tribe, and be equipped with the latest in coffee consuming tracking technology.<br />
                    We are here to promote unhealthy stimulant behavior, and push beyond the limits of the cardiovascular system.<br />
                    Join us on the road to immortality. <br />
                    In Bean Juice, We Trust</p>
                <h6 className="text-3xl text-center pt-20 italic">“Anything in life worth doing, is worth overdoing. Moderation is for cowards."</h6>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-24 gap-24 mx-20">
                <div className="text-center">
                    <h1 className="block text-4xl mb-8 text-green-800">Brew</h1>
                    <div className="flex items-center justify-center shadow-2xl bg-green-50">
                        <Image className="my-8 shadow-lg" src={"/splashfinal.jpg"} width={320} height={200} alt="coffee-splash" />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="block text-4xl mb-8 text-violet-800 font-normal">Consume</h1>
                    <div className=" flex items-center justify-center shadow-2xl bg-violet-50">
                        <Image className="my-8" src={"/consume.jpg"} width={400} height={200} alt="plant-seedling" />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="block text-4xl mb-8 text-red-800">Compete</h1>
                    <div className="flex items-center justify-center shadow-2xl bg-red-50">
                        <Image className="my-8" src={"/pete-rose.jpg"} width={400} height={200} alt="coffee-splash" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;