import HeroComponent from '../components/HeroComponent';
import AboutComponent from '../components/AboutComponent';
import SkillsComponent from '../components/SkillsComponent';
import ProjectsComponent from '../components/ProjectsComponent';
import ContactComponent from '../components/ContactComponent';

const HomePage = () => {
  return (
    <main>
      <HeroComponent />
      <AboutComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ContactComponent />
    </main>
  );
};

export default HomePage;
