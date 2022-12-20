import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact"
import Carrers from "./pages/Careers"
import Products from "./pages/Products"
import Blog from "./pages/Blog"
import BlogSingle from "./pages/BlogSingle"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact-Us" element={<Contact/>}/>
        <Route path="/Carrers" element={<Carrers/>}/>
        {/* <Route path="/Products" element={<Products/>}/> */}
        <Route path="/Blogs" element={<Blog/>}/>
        <Route path="/Blog/:id" element={<BlogSingle/>}/>
      </Routes>
    </Router>
  );
}
export default App;