import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Main from "./pages/Main/Main";
import User from "./pages/User/User";
import AboutMe from "./pages/AboutMe/AboutMe";
import Layout from "./components/Layout/Layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<Main />} />
        <Route path="/user" element={<User />} />
        <Route path="/about-me" element={<AboutMe/>}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
