import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";

const sidebarButtonsData = [
  { href: "/", label: "dashboard", icon: <RxDashboard size={20} /> },
  { href: "/customers", label: "customers", icon: <RxPerson size={20} /> },
  {
    href: "/orders",
    label: "orders",
    icon: <HiOutlineShoppingBag size={20} />,
  },
  { href: "/", label: "settings", icon: <FiSettings size={20} /> },
];

// global sidebar
function Sidebar({ children }: any): JSX.Element {
  return (
    <div className="flex">
      <div className="fixed w-20 h-full p-4 bg-white dark:bg-black dark:text-white border-r flex flex-col justify-between">
        <SidebarButtons />
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );

  // sidebar buttons
  function SidebarButtons() {
    return (
      <div className="flex flex-col items-center">
        <SidebarHome />
        <span className="border-b border-gray-200 dark:border-gray-50 w-full p-4" />

        {sidebarButtonsData.map((e, i) => (
          <Link href={e.href} aria-label={e.label} key={`SidebarButtons_${i}`}>
            <div className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-50 dark:hover:text-purple-800 cursor-pointer my-4 p-4 rounded-lg inline-block">
              {e.icon}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  // home button
  function SidebarHome() {
    return (
      <Link href="/" aria-label="home">
        <div className="bg-purple-800 dark:bg-purple-600 text-white p-4 rounded-lg inline-block">
          <RxSketchLogo size={20} />
        </div>
      </Link>
    );
  }
}

export default Sidebar;
