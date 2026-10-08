import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Focus } from '@/components/Focus';
import { Credentials } from '@/components/Credentials';
import { Profile } from '@/components/Profile';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <Credentials />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
