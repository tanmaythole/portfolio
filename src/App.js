import './App.css';
import NavBar from './components/NavBar/NavBar';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <Header />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Blogs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
