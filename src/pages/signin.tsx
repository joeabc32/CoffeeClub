import { Navbar } from '@/components/Navbar'
import { useRouter } from 'next/router'
import Login from '@/components/Login';

function Signin() {
    return (
        <div>
            <Navbar />
            <Login />
        </div>
    );
}

export default Signin;