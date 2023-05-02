import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    // Defining the layout of the App
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {/* Outlet renders rest of the component as child */}
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;
