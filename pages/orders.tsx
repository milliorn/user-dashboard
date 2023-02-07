import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data";

// orders page
function orders(): JSX.Element {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="flex justify-between px-4 pt-4 dark:text-white">
        <h2>Orders</h2>
        <h2>Welcome Back!</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white dark:bg-black dark:text-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Order</span>
            <span className="sm:text-left text-right hidden sm:flex">
              Status
            </span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={`Orders_${id}`}
                className="bg-gray-50 hover:bg-gray-100  dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <FaShoppingBag className="text-purple-800 dark:text-purple-100" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 dark:text-gray-100 font-bold">
                      ${order.total.toLocaleString()}
                    </p>
                    <p className="text-gray-800 dark:text-gray-100 text-sm">
                      {order.name.first}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-200 sm:text-left text-right hidden sm:flex">
                  <span
                    className={
                      order.status == "Processing"
                        ? "bg-green-200 dark:bg-green-700 p-2 rounded-lg"
                        : order.status == "Completed"
                        ? "bg-blue-200 dark:bg-blue-700 p-2 rounded-lg"
                        : "bg-yellow-200 dark:bg-yellow-700 p-2 rounded-lg"
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default orders;
