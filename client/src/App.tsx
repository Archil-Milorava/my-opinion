import { Route, Routes } from "react-router-dom";
import AppContainer from "./pages/AppContainer";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Ragaca from "./pages/Ragaca";

const App = () => {
  return (
    <Routes>
      <Route element={<AppContainer />}>
        <Route path="/" element={<Landing />} />
        <Route path="/ragaca" element={<Ragaca />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
