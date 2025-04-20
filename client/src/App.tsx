import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import AppContainer from "./pages/AppContainer";
import BlogPage from "./pages/BlogPage";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Ragaca from "./pages/Ragaca";
import SignUp from "./pages/SignUp";
import ScrollToTop from "./utils/ScrollToTop";

const Bla = () => {
  return <div>bajdbasjd</div>;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route element={<AppContainer />}>
            <Route path="/ragaca" element={<Ragaca />} />
          </Route>
          <Route path="/bla" element={<Bla />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
