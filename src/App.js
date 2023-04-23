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
import Details from "./page/Details/Details";
import Add from "./page/Add/Add";
import Update from "./page/Update/Update";
import RequireAuth from "./utils/RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private1"
          element={
            <RequireAuth>
              <Private1 />
            </RequireAuth>
          }
        />
        <Route
          path="/private2"
          element={
            <RequireAuth>
              <Private2 />
            </RequireAuth>
          }
        />
        <Route path="/details/:userId" element={<Details />} />
        <Route path="/allUsers" element={<AllUsers />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:userId" element={<Update />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
