
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Navigation from './Navigation'

import Home from './Home/Home';
import Posts from './Posts/Posts'
import About from './About/About'

// npm run dev

function App() {
  return (
    <Router>
      <div className='App text-center h-screen bg-white'>
          <Navigation />
        <Routes >
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
