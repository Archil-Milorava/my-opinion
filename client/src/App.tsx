import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import AppContainer from "./pages/AppContainer";
import BlogPage from "./pages/BlogPage";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import UserPage from "./pages/UserPage";
import ScrollToTop from "./utils/ScrollToTop";

const Bla = () => {
  return <div>bajdbasjd</div>;
};

const App = () => {
  return (
    <>
      <Helmet>
        <title>My Opinion - Archil Milorava</title>
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route element={<AppContainer />}>
            <Route path="/profile" element={<UserPage />} />
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
