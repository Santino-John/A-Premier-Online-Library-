import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Author from "./Pages/Authors/Author";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Cart from '../src/Pages/Cart/Cart.jsx'
import Login from './Forms/Login/Login.jsx';
import Register from './Forms/Register/Register.jsx'
import Book from './Pages/Book/Book.jsx'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Author/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/book/:id" element={<Book/>} />
        <Route path="/login" element={<Login/>} />
        

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
