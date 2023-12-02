import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './containers/Hero';
import About from './containers/About';
import Blogs from './containers/blogs';
import Projects from './containers/projects';
import { ThemeProvider } from './context/themeContext';

import './scss/index.scss';

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const colorScheme = localStorage.getItem("theme") ?? "light";
    setTheme(colorScheme);
    document.documentElement.setAttribute("data-bs-theme", colorScheme);
  }, []);

  return (
    <ThemeProvider value={[theme, setTheme]}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blogs />
      </main>
    </ThemeProvider>
  )
}

export default App;
