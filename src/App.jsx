import { ThemeProvider } from './context/ThemeContext';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <NavbarComponent />
      <HomePage />
      <FooterComponent />
    </ThemeProvider>
  );
}

export default App;
