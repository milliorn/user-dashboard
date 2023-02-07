import { data } from "../data/data";
import { FaShoppingBag } from "react-icons/fa";

// outputs the recent orders found on main dashboard page
function RecentOrders(): JSX.Element {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white dark:bg-black dark:text-white overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={`Recent Orders_${id}`}
            className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-3">
              <FaShoppingBag className="text-purple-800 dark:text-purple-100" />
            </div>
            <div className="pl-4">
              <p className="text-gray-800 dark:text-gray-100 font-bold">
                ${order.total}
              </p>
              <p className="text-gray-400 dark:text-gray-200 text-sm">
                {order.name.first}
              </p>
            </div>
            <p className="lg:flex hidden absolute right-6 text-sm">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentOrders;
