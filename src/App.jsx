import { BrowserRouter, Route, Routes } from "react-router-dom";

//COMPONENTS
import Listing from "./components/Listing";
import Details from "./components/Details";
import Cart from "./components/Cart";

function App() {
return (
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Listing/>} />
    <Route path="/details/:id" element={<Details/>} />
    <Route path="/cart" element={<Cart/>} />
  </Routes>
  </BrowserRouter>
);
}

export default App;
