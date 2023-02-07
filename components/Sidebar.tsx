import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";

// global sidebar
function Sidebar({ children }: any): JSX.Element {
  return (
    <div className="flex">
      <div className="fixed w-20 h-full p-4 bg-white dark:bg-black dark:text-white border-r flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/" aria-label="home">
            <div className="bg-purple-800 dark:bg-purple-600 text-white p-4 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b border-gray-200 dark:border-gray-50 w-full p-4" />
          <Link href="/" aria-label="dashboard">
            <div className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-50 dark:hover:text-purple-800 cursor-pointer my-4 p-4 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customers" aria-label="customers">
            <div className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-50 dark:hover:text-purple-800 cursor-pointer my-4 p-4 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders" aria-label="orders">
            <div className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-50 dark:hover:text-purple-800 cursor-pointer my-4 p-4 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/" aria-label="settings">
            <div className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-50 dark:hover:text-purple-800 cursor-pointer my-4 p-4 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
}

export default Sidebar;
