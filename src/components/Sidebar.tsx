import { Link } from "react-router-dom";
import { Contact } from "lucide-react";
const Sidebar = () => {
  return (
    <aside className="sticky inset-y-0 left-0 z-50 hidden h-screen sm:block ">
      <div className=" flex h-screen w-52 flex-col bg-gray-800 p-3 shadow">
        <div className="space-y-3 ">
          <Contact className="h-14 w-14  text-white" />
          <div className="flex items-center text-white ">
            <h2 className="text-3xl font-bold tracking-tighter  ">
              Contact Manager
            </h2>
          </div>
          <hr />
          <div className="flex-1">
            <ul className="space-y-1 pb-4 pt-2 text-lg ">
              <li className="">
                <Link
                  to="/contacts"
                  className="mr-4 mt-4 w-full rounded-lg p-3 text-gray-200 hover:bg-gray-700 hover:text-white lg:mt-0 lg:inline-block"
                >
                  Contacts
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  to="/dashboard"
                  className="mr-4 mt-4 w-full rounded-lg p-3 text-gray-200 hover:bg-gray-700 hover:text-white lg:mt-0 lg:inline-block"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
