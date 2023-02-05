import { useEffect, useState } from "react";
import { formatter } from "./utils/formatter";
import { randomNumber } from "./utils/randomNumber";

// https://github.com/vercel/next.js/discussions/38263#discussioncomment-3162871
function TopCards(): JSX.Element {
  const [dailyRevenue, setDailyRevenue] = useState("");
  const [yearlyRevenue, setYearlyRevenue] = useState("");
  const [customers, setCustomers] = useState("");
  const [daily, setDaily] = useState(0);
  const [yearly, setYearly] = useState(0);
  const [consumers, setConsumer] = useState(0);

  useEffect(() => {
    setDailyRevenue(formatter.format(randomNumber(7000, 8000)));
    setYearlyRevenue(formatter.format(randomNumber(1000000, 2000000)));
    setCustomers(randomNumber(11000, 20000).toLocaleString());
    setDaily(randomNumber(18, 100));
    setYearly(randomNumber(11, 100));
    setConsumer(randomNumber(17, 100));
  }, []);

  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white dark:bg-black dark:text-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{dailyRevenue}</p>
          <p className="text-gray-600 dark:text-gray-200">Daily Revenue</p>
        </div>
        <p className="bg-green-200 dark:bg-green-700 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 dark:text-green-50 text-lg">+{daily}%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white dark:bg-black dark:text-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{yearlyRevenue}</p>
          <p className="text-gray-600 dark:text-gray-200">YTD Revenue</p>
        </div>
        <p className="bg-green-200 dark:bg-green-700 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 dark:text-green-50 text-lg">+{yearly}%</span>
        </p>
      </div>
      <div className="bg-white dark:bg-black dark:text-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">{customers}</p>
          <p className="text-gray-600 dark:text-gray-200">Customers</p>
        </div>
        <p className="bg-green-200 dark:bg-green-700 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 dark:text-green-50 text-lg">+{consumers}%</span>
        </p>
      </div>
    </div>
  );
}

export default TopCards;
