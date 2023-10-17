import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import Card from "components/card";

const PieChartCard = () => {
  return (
    <Card extra="rounded-[5px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Customers
          </h4>
          <p className="text-sm text-gray-600">Customers That buy products</p>
        </div>

        
      </div>

      <div className="mb-auto mt-10 flex h-[220px] w-full items-center justify-center">
        <PieChart options={pieChartOptions} series={pieChartData} />
      </div>
      
    </Card>
  );
};

export default PieChartCard;
