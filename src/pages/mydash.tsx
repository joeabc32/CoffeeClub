import { Navbar } from '@/components/Navbar'
import { useRouter } from 'next/router'
import Overview from '@/components/Overview';
import { useSession } from 'next-auth/react';
import { AccessDenied } from '@/components/AccessDenied';
import Footer from '@/components/Footer';

function MyDash() {
    const { data: session } = useSession()
    if (!session) {
        return (
            <div>
                <Navbar />
                <AccessDenied />
                <Footer />
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <Overview />
        </div>
    );
}

export default MyDash;