import BarChart from "components/charts/BarChart";
import { barChartDataDailyTraffic } from "variables/charts";
import { barChartOptionsDailyTraffic } from "variables/charts";

import Card from "components/card";

const Overview = () => {
  return (
    <Card extra="pb-7 p-[20px] w-full rounded-[5px]">
      <div className="flex flex-row justify-between">
        <div className="ml-1">
          <p className="text-lg font-bold text-navy-700 dark:text-white">
            Overview
          </p>
          <p className="text-sm font-medium leading-4 text-gray-600">
            Monthley Earnings
          </p>
        </div>
        
      </div>

      <div className="h-[250px] w-full pt-10 pb-0">
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </div>
    </Card>
  );
};

export default Overview;
