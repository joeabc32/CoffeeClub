import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { useRouter } from 'next/router'
import About from '@/components/About'
import { Raleway } from 'next/font/google'
import Footer from '@/components/Footer'

const raleway = Raleway({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
})



export default function Home() {

  return (
    <div>
      <Navbar />
      <main style={raleway.style}>
        <Hero />
        <About />
        <Footer />
      </main>
    </div>
  )
}
