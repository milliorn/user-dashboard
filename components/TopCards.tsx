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

  const topCardsData = [
    {
      paragraphOne: dailyRevenue,
      paragraphTwo: "Daily Revenue",
      paragraphThree: `${daily}`,
    },
    {
      paragraphOne: yearlyRevenue,
      paragraphTwo: "YTD Revenue",
      paragraphThree: `${yearly}`,
    },
    {
      paragraphOne: customers,
      paragraphTwo: "Customers",
      paragraphThree: `${consumers}`,
    },
  ];

  return (
    <div className="grid lg:grid-cols-6 gap-4 p-4">
      {topCardsData.map((row, index) => (
        <div
          className="lg:col-span-2 col-span-1 bg-white dark:bg-black dark:text-white flex justify-between w-full border p-4 rounded-lg"
          key={index}
        >
          <div className="flex flex-col w-full pb-4">
            <p className="text-sm sm:text-2xl font-bold">{row.paragraphOne}</p>
            <p className="text-gray-600 dark:text-gray-200 text-sm sm:text-base">
              {row.paragraphTwo}
            </p>
          </div>
          <p className="bg-green-200 dark:bg-green-700 flex justify-center items-center p-2 rounded-lg">
            <span className="text-green-700 dark:text-green-50 text-lg">
              +{row.paragraphThree}%
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default TopCards;
