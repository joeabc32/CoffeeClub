import { useState, ChangeEvent } from "react";
import axios from 'axios';
import router from "next/router";

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const res = await axios.post('http://localhost:3000/api/checkRegister', {
                email: formData.email,
                name: formData.name,
                password: formData.password,
                ounces: 0
            });

            if (res.status === 200) {
                console.log('worked')
                setFormData({ email: '', name: '', password: '' })
            } else {
                console.log('error')
            }
        }
        catch (error: AxiosError) {
            if (error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert('An error occured. Please try again')
            }
        }
    };

    return (
        <div className='flex justify-center' style={{ backgroundImage: `url(loginbg.jpg)`, width: '100%', height: '1300px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <form className='border-2 p-8 mt-40 bg-gray-50 rounded-2xl' onSubmit={handleSubmit}>
                    <div>
                        <h3 className='text-2xl flex justify-center'>Create an Account</h3>
                    </div>
                    <div className="">
                        <div className='my-8 flex justify-end'>
                            <label className='text-lg'>Account Email</label>
                            <input name='email' type='string' className='border-2 rounded-lg ml-8 w-60 p-1' value={formData.email} onChange={handleInputChange}></input><br></br>
                        </div>

                        <div className='my-8 flex justify-end'>
                            <label className='text-lg'>Display Name</label>
                            <input name='name' type='string' className='border-2 rounded-lg ml-8 w-60 p-1' value={formData.name} onChange={handleInputChange}></input><br></br>
                        </div>

                        <div className='mb-8 flex justify-end'>
                            <label className='text-lg'>Password </label>
                            <input name='password' type='password' className='border-2 rounded-lg ml-8 w-60 p-1' value={formData.password} onChange={handleInputChange}></input><br></br>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='mb-5 border-2 rounded-lg w-96 py-1 bg-slate-200 hover:bg-blue-300 border-gray-400 font-semibold'>Register</button>
                    </div>
                    <div>
                        <span>
                            <p>Already have an account?  <a href='#' className='text-blue-600' onClick={() => { router.push('/signin') }}>Log in here</a></p>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;