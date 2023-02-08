import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data";

// page that outputs customers
function customers(): JSX.Element {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="flex justify-between p-4 dark:text-white">
        <h2>Customers</h2>
        <h2>Welcome Back!</h2>
      </div>
      <div className="p-4">
        <CustomersTable />
      </div>
    </div>
  );

  // actual table
  function CustomersTable(): JSX.Element {
    return (
      <div className="w-full m-auto p-4 border rounded-lg bg-white dark:bg-black dark:text-white overflow-y-auto">
        <CustomersTableHeading />
        <ul>{data.map((order, id) => CustomersTableGenerator(id, order))}</ul>
      </div>
    );
  }

  // generator to generate table
  function CustomersTableGenerator(
    id: number,
    order: {
      id: number;
      name: { first: string; last: string };
      total: number;
      status: string;
      method: string;
      date: string;
    }
  ): JSX.Element {
    return (
      <li
        key={`Customers_${id}`}
        className="bg-gray-50 hover:bg-gray-100 dark:bg-gray-800  dark:hover:bg-gray-800 dark:text-white rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
      >
        <div className="flex items-center">
          <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg hidden sm:flex">
            <BsPersonFill className="text-purple-800 dark:text-purple-100" />
          </div>
          <p className="pl-4 text-xs sm:text-sm md:text-base">
            {`${order.name.first} ${order.name.last}`}
          </p>
        </div>

        <p className="text-gray-600 dark:text-gray-200 sm:text-left text-right text-xs sm:text-sm md:text-base truncate">
          {order.name.first}@gmail.com
        </p>

        <p className="hidden md:flex">{order.date}</p>

        <div className="sm:flex hidden justify-between items-center">
          <p>{order.method}</p>
          <BsThreeDotsVertical />
        </div>
      </li>
    );
  }

  // generate table heading
  function CustomersTableHeading(): JSX.Element {
    return (
      <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
        <span>Name</span>
        <span className="sm:text-left text-right">Email</span>
        <span className="hidden md:grid">Last Order</span>
        <span className="hidden sm:grid">Payment</span>
      </div>
    );
  }
}

export default customers;
