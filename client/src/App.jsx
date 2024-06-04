import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ProgramDetails from './pages/ProgramDetails';
import CourseDetails from './pages/CourseDetails';
import Book from './pages/Book';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs">
            <Route index element={<Programs />} />
            <Route path=":id" element={<ProgramDetails />} />
            <Route path="course/:id" element={<CourseDetails />} />
          </Route>
          <Route path="/book/:id" element={<Book />} />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
