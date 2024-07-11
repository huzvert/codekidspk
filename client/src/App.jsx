import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import ProgramDetails from "./pages/ProgramDetails";
import CourseDetails from "./pages/CourseDetails";
import Careers from "./pages/Careers";
import Schedules from "./pages/Schedules";
import Cart from "./pages/Cart";
import NoteFound from "./components/NotFound";

// Context States
import CartState from "./context/cartState";

function App() {
  return (
    <Router>
      <CartState>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs">
              <Route index element={<Programs />} />
              <Route path=":id" element={<ProgramDetails />} />
              <Route path="course/:id" element={<CourseDetails />} />
            </Route>
            <Route path="/careers" element={<Careers />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route path="*" element={<NoteFound />} />
        </Routes>
      </CartState>
    </Router>
  );
}

export default App;
