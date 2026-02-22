import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import useScrollToTop       from './hooks/useScrollToTop';


const ScrollToTop = () => { useScrollToTop(); return null; };

function App() {
  const { pathname } = useLocation();
  const isProjectPage = pathname.startsWith('/project/');

  return (
    <ThemeProvider>
    <ScrollToTop />
    {!isProjectPage && <NavbarComponent />}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectDetailPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
    {!isProjectPage && <FooterComponent />}
  </ThemeProvider>
  );
}

export default App;
