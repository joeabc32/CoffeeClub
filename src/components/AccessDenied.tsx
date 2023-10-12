import { signIn } from "next-auth/react"

export function AccessDenied() {
    return (
        <div style={{ backgroundColor: "#161b22" }} className="h-screen">
            <div className="flex justify-center py-60">
                <div className="w-96 bg-slate-400 h-40 rounded-2xl flex items-center justify-center">
                    <h1 className="text-xl text-center"><a href="#" className="cursor-pointer text-blue-600 font-bold hover:text-blue-400" onClick={() => signIn()}>Login</a> to access your Dashboard.</h1>
                </div>
            </div>
        </div>
    )
}
