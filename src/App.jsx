import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import ImageGallery from "./LazyImage"
import Test from "./ModelComponent";
import Home from "./Home";
import DragDrop from "./DragDrop";
import Movie from "./Movies";


function App() {

  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/image" element={<ImageGallery />} />
          <Route path="/Drag" element={<DragDrop />} />
          <Route path="/Movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
