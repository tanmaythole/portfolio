import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './containers/Hero';
import About from './containers/About';
import Blogs from './containers/blogs';
import Contact from './containers/contact';
import Footer from './components/Footer';
import Projects from './containers/projects';
import Testimonials from './containers/testimonials';
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
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App;
