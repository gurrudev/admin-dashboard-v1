
import PieChartCard from "views/admin/default/components/PieChartCard";

import { MdAnalytics, MdAssignment,MdMonetizationOn, MdAccountBalanceWallet } from "react-icons/md";

import Widget from "components/widget/Widget";
import Overview from "views/admin/default/components/Overview";

import DashBoardTable from "components/tables/DashBoardTable";
import tableData from "components/tables/tableData";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6">
        <Widget
          icon={<MdMonetizationOn className="h-[40px] w-[40px]" />}
          title={"Earnings"}
          subtitle={"$340.5"}
          percentage={"23"}
        />
        <Widget
          icon={<MdAssignment className="h-[40px] w-[40px]" />}
          title={"Orders"}
          subtitle={"$642.39"}
          percentage={"-45"}
        />
        <Widget
          icon={<MdAccountBalanceWallet className="h-[40px] w-[40px]" />}
          title={"Balance"}
          subtitle={"$574.34"}
          percentage={"2"}
        />
        <Widget
          icon={<MdAnalytics className="h-[40px] w-[40px]" />}
          title={"Total Sales"}
          subtitle={"$1,000"}
          percentage={"-12"}
        />

      </div>


      {/* Tables & Charts */}

      <div className="mt-5 grid md:grid-cols-2 gap-5 xl:grid-cols-8">
        <div className="xl:col-span-5">
          <Overview />
        </div>
        <div className="xl:col-span-3">
          <PieChartCard />
        </div>
      </div>

      {/* table */}
      <DashBoardTable tableData={tableData}/>

      <div className="mt-5"></div>
    </div>
  );
};

export default Dashboard;
