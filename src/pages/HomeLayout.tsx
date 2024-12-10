import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="py-20 align-element">
        <Outlet />
      </main>
    </>
  );
};
export default HomeLayout;
