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
import Extra from "./extra";
import LetterTracer from "./Canvas/canvas";


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
          <Route path="/extra" element={<Extra />} />
          <Route path="/canvas" element={<LetterTracer />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
