import Hero from '@/components/Hero'
import Listing from '@/components/Listing'
import Testimonials from '@/components/Testimonials'
import Video from '@/components/Video'

export default function Home() {
  return (
    <main>
      <Hero />    
      <Listing />
      <Video />
      <Testimonials />
    </main>
  )
}
