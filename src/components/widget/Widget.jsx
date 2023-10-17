import Card from "components/card";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";


const Widget = ({ icon, title, subtitle, percentage }) => {
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[5px]">
      <div className="ml-[18px] flex h-[120px] w-auto flex-row items-center">
        <div className="rounded-full  bg-lightPrimary p-8 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {subtitle}k
        </h4>

        <div className="mt-2 flex gap-1 items-start">

          <div className={`flex items-center text-sm ${percentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {percentage >= 0 ? (
              <>
                <MdArrowDropUp className="h-5 w-5" />
                <p className="font-bold">{percentage}%</p>
              </>
            ) : (
              <>
                <MdArrowDropDown className="h-5 w-5" />
                <p className="font-bold">{percentage}%</p>
              </>
            )}
          </div>
          <p className="text-sm text-gray-600">{"this month"}</p>
        </div>
      </div>
    </Card>
  );
};

export default Widget;
