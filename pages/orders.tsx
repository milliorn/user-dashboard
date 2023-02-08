import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data";
import Header from "@/components/Header";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

// orders page
function orders(): JSX.Element {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
      <Header h2Left="Orders" h2Right="Welcome!" />
      <div className="p-4">
        <OrdersTableBody />
      </div>
    </div>
  );

  // table body
  function OrdersTableBody() {
    return (
      <div className="w-full m-auto p-4 border rounded-lg bg-white dark:bg-black dark:text-white overflow-y-auto">
        <OrdersTableHeading />
        <OrdersTable />
      </div>
    );
  }

  // orders table
  function OrdersTable(): JSX.Element {
    return (
      <ul>
        {data.map((order, id) => (
          <li
            key={`Orders_${id}`}
            className="bg-gray-50 hover:bg-gray-100  dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
          >
            <OrdersColumn name={order.name} total={order.total} />
            <OrdersTableStatus status={order.status} />
            <p className="hidden md:flex">{order.date}</p>
            <OrderDots method={order.method} />
          </li>
        ))}
      </ul>
    );

    // orders column
    function OrdersColumn(props: {
      name: { first: string; last: string };
      total: number;
    }): JSX.Element {
      const { name, total } = props;

      return (
        <div className="flex">
          <OrdersTableIcon />
          <OrderNameColumn total={total} name={name.first} />
        </div>
      );
    }

    // order triple dot
    function OrderDots(order: { method: string }): JSX.Element {
      const { method } = order;
      return (
        <div className="sm:flex hidden justify-between items-center">
          <p>{method}</p>
          <BsThreeDotsVertical />
        </div>
      );
    }

    // orders status
    function OrdersTableStatus(order: { status: string }): JSX.Element {
      const { status } = order;
      return (
        <p className="text-gray-600 dark:text-gray-200 sm:text-left text-right hidden sm:flex">
          <span
            className={
              status === "Processing"
                ? "bg-green-200 dark:bg-green-700 p-2 rounded-lg"
                : status === "Completed"
                ? "bg-blue-200 dark:bg-blue-700 p-2 rounded-lg"
                : "bg-yellow-200 dark:bg-yellow-700 p-2 rounded-lg"
            }
          >
            {order.status}
          </span>
        </p>
      );
    }

    // name column
    function OrderNameColumn(props: {
      total: number;
      name: string;
    }): JSX.Element {
      const { total, name } = props;
      return (
        <div className="pl-4">
          <p className="text-gray-800 dark:text-gray-100 font-bold">
            ${total.toLocaleString()}
          </p>
          <p className="text-gray-800 dark:text-gray-100 text-sm">{name}</p>
        </div>
      );
    }

    // orders icon
    function OrdersTableIcon(): JSX.Element {
      return (
        <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
          <FaShoppingBag className="text-purple-800 dark:text-purple-100" />
        </div>
      );
    }
  }

  // orders table heading
  function OrdersTableHeading(): JSX.Element {
    return (
      <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
        <span>Order</span>
        <span className="sm:text-left text-right hidden sm:flex">Status</span>
        <span className="hidden md:grid">Last Order</span>
        <span className="hidden sm:grid">Method</span>
      </div>
    );
  }
}

export default orders;
