import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <>
      <div className="w-[100%]relative">
        <header className="sticky top-0 z-50">
          <Header isLogin={true} />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default AppLayout;
