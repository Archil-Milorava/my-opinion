import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import PaginationMain from "./PaginationMain";

const PageLayout = () => {
  return (
    <main className="w-full h-auto min-h-screen flex flex-col  ">
      <Header />
      <div className="w-full h-auto flex-1 flex flex-col md:flex-row">
        {/* <Categories /> */}
        <Outlet />
        
      </div>
      
      <Footer />
    </main>
  );
};

export default PageLayout;
