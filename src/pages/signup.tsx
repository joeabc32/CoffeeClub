import { Navbar } from '@/components/Navbar'
import { useRouter } from 'next/router'
import Register from '@/components/Register';

function Signup() {
    return (
        <div>
            <Navbar />
            <Register />
        </div>
    );
}

export default Signup;