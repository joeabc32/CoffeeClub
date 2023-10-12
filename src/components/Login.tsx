import { useState, ChangeEvent } from "react";
import { useRouter } from 'next/router'
import { signIn } from "next-auth/react";

interface CredentialsFormProps {
    csrfToken?: string;
}

function Login(props: CredentialsFormProps) {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const router = useRouter();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = formData.email;
        const password = formData.password;

        try {
            const res = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            // if (res?.status === 200) {
            //     router.push('/mydash')
            // }

            // if (res.error) {
            //     setError("Invalid Credentials");
            //      return;
            // }

        } catch (error) { }
    };


    return (
        <div className='flex justify-center mt-2' style={{ backgroundImage: `url(loginbg.jpg)`, width: '100%', height: '1300px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <div className='border-2 py-6 px-10 bg-gray-100 rounded-2xl mt-28'>
                    <div>
                        <div className="flex justify-center">
                            <button onClick={() => signIn("google")} className="border-2 border-gray-300 p-4 m-2 bg-white w-72 h-14 rounded-lg flex gap-12"><img height={24} width={24} src="https://www.vectorlogo.zone/logos/google/google-icon.svg"></img>Sign in with Google</button>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={() => signIn("github")} className="border-2 border-gray-300 p-4 m-2 bg-white w-72 h-14 rounded-lg flex gap-12"><img height={24} width={24} src="https://authjs.dev/img/providers/github.svg"></img>Sign in with GitHub</button>
                        </div>
                    </div>
                    <div className="hr-container">
                        <hr className="mt-6 border-1 border-gray-300" />
                        <div className="hr-text">or</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-4'>
                            <div>
                                <label className='text-md pl-2 font-semibold'>Email:</label>
                            </div>
                            <div className="flex justify-center">
                                <input required name='email' type='email' className='border-2 rounded-lg w-72 p-1' value={formData.email} onChange={handleInputChange}></input><br></br>
                            </div>
                        </div>
                        <div className='mt-4 mb-8'>
                            <div>
                                <label className='text-md pl-2 font-semibold'>Password: </label>
                            </div>
                            <div className="flex justify-center">
                                <input required name='password' type='password' className='border-2 rounded-lg p-1 w-72' value={formData.password} onChange={handleInputChange}></input><br></br>
                            </div>
                        </div>
                        <div className='flex justify-center mb-5'>
                            <button type='submit' className='border-2 rounded-lg w-72 h-12 bg-slate-200 hover:bg-blue-300 border-gray-400'>Sign in with credentials</button>
                        </div>
                        <div>
                            <span>
                                <p>Don't have an account?  <a href='#' className='text-blue-600' onClick={() => { router.push("/signup") }}>Register here</a></p>
                            </span>
                            <span>
                                <a href='#' className='text-blue-600'>Forgot Password?</a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Login;