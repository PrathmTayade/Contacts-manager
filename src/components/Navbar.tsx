import { Contact, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  //Only visible smaller screens for Navigation.
  return (
    <header className=" bg-gray-800 p-6 sm:hidden">
      <div className="flex flex-wrap items-center  justify-between">
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="flex items-center rounded border border-gray-400 px-3 py-2 text-gray-200 hover:border-white hover:text-white"
        >
          <Menu />
        </button>

        <Link to="contacts" className="text-xl font-semibold tracking-tight">
          <Contact className="h-10 w-10  text-white" />
        </Link>
      </div>

      {/* Tabs for navigation */}
      {show ? (
        <nav className="mt-5 w-full flex flex-col gap-4  ">
          <div>
            <Link
              to="contacts"
              className="w-full p-2 text-xl font-semibold tracking-tight text-white"
            >
              Contacts
            </Link>
          </div>
          <div >
            <Link
              to="dashboard"
              className="w-full p-2 text-xl font-semibold tracking-tight text-white"
            >
              Dashboard
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Navbar;
