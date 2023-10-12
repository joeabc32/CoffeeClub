import Image from "next/image"

function Footer() {
    return (
        <footer className="flex justify-between pb-18">
            <div className="inline-block">
                <h1 className="text-white text-xl pt-5 pl-8 7-50 relative top-1">In Bean</h1>
                <div className="inline-block">
                    <Image className="rounded-full ml-8" src={'/logoblack.jpg'} width={60} height={200} alt="logo" />
                </div>
                <h1 className="text-white text-xl rotate-90 inline-block mb-8 relative bottom-11 right-8">We Trust</h1>
            </div>
            <div className="">
                <h3 className="text-white pt-6 text-xl">Our Service</h3>
                <div className="text-gray-300 text-sm py-4">
                    <p className="py-1">Home</p>
                    <p className="py-1">About</p>
                    <p className="py-1">Contact</p>
                    <p className="py-1">Login</p>
                </div>
            </div>
            <div>
                <h3 className="text-white pt-6 text-xl">Company</h3>
                <div className="text-gray-300 text-sm py-4">
                    <p className="py-1">Terms of Use</p>
                    <p className="py-1">Contact Us</p>
                </div>
            </div>
            <div>
                <h3 className="text-white pt-6 text-xl mr-48">Socials</h3>
            </div>
        </footer>
    )
}

export default Footer