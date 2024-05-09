import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Program from './components/programs/Program';
import Title from './components/title/Title';
import About from './components/Abot/About';
import Campus from './components/campus/Campus';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Video from './components/videoplayer/Video';

const App = () => {
  const [playstate, setplaystate] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container"><Title subtitle='Our Program'  title='what we Offer'/>
      <Program />
      <About setplaystate={setplaystate}/>
      <Title subtitle='Gallery'  title='Campus Photos'/>
      <Campus />
      <Title subtitle='Testimonials'  title='What Student says'/>
      <Testimonials />
      <Title subtitle='Contact US'  title='Get In Touch'/>
      <Contact />
      <Footer />

      </div>
      <Video playstate={playstate} setplaystate={setplaystate}/>
    </div>
  )
}

export default App
