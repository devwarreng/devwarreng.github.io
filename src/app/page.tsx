import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import MyJourney from '@/components/MyJourney';
import MySkillset from '@/components/MySkillset';


import ChessCorner from '@/components/ChessCorner';
import Services from '@/components/Services';
import GetInTouch from '@/components/GetInTouch';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <MyJourney />
      <MySkillset />
      <ChessCorner />
      <Services />
      <GetInTouch />
      <Footer />
    </div>
  );
}
