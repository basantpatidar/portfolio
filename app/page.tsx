import { Hero }           from '@/app/components/sections/Hero';
import { About }          from '@/app/components/sections/About';
import { SystemsGallery } from '@/app/components/sections/SystemsGallery';
import { Experience }     from '@/app/components/sections/Experience';
import { Skills }         from '@/app/components/sections/Skills';
import { Contact }        from '@/app/components/sections/Contact';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <SystemsGallery />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
