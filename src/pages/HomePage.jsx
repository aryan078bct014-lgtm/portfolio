import HeroComponent     from '../components/HeroComponent';
import AboutComponent    from '../components/AboutComponent';
import SkillsComponent   from '../components/SkillsComponent';
import ProjectsComponent from '../components/ProjectsComponent';
import ContactComponent  from '../components/ContactComponent';
import AIUsageComponent from '../components/AiusageComponent';

const HomePage = () => (
  <main>
    <HeroComponent />
    <AboutComponent />
    <SkillsComponent />
    <ProjectsComponent />
    <AIUsageComponent />
    <ContactComponent />
  </main>
);

export default HomePage;
