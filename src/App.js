import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./page/Home/Home";
import LogIn from "./page/LogIn/LogIn";
import Private1 from "./page/Private1/Private1";
import Private2 from "./page/Private2/Private2";
import NotFound from "./page/NotFound/NotFound";
import AllUsers from "./page/AllUsers/AllUsers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private1" element={<Private1 />} />
        <Route path="/private2" element={<Private2 />} />
        <Route path="/allUsers" element={<AllUsers />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
