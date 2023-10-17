import React from 'react'


const DashBoardTable = ({tableData}) => {
  return (
    
    <div class="relative overflow-x-auto p-5 bg-white mt-5 shadow-md rounded-[5px]">
    <div class="flex items-center justify-between pb-4  dark:bg-gray-900">
      <p className="text-lg font-bold text-navy-700 mr-9  dark:text-white ml-5 ">Product Sell</p>
      <div className="flex gap-3 items-center justify-center">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative bg-lightPrimary rounded-[5px]">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border-none rounded-[10px] focus:outline-none bg-lightPrimary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Search" />
        </div>
        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="flex items-center truncate justify-center  text-gray-500 bg-lightPrimary font-medium rounded-[5px] text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
          <span class="sr-only  items-center justify-center">Action button</span>
          <p className="text-inline"> Last 30 days</p>
          <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
      </div>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-sm border-b text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-400">
        <tr>

          <th scope="col" class="px-6 py-3">
            Product Name
          </th>
          <th scope="col" class="px-6 py-3">
            Stock
          </th>
          <th scope="col" class="px-6 py-3">
            Price
          </th>
          <th scope="col" class="px-6 py-3">
            Total Sales
          </th>
        </tr>
      </thead>
      <tbody>

      {tableData.map((data) => (
  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-lightPrimary dark:hover:bg-gray-600" key={data.productName}>
    <th scope="row" className="flex items-center px-6 py-4 truncate text-gray-900 whitespace-nowrap dark:text-white">
      <img className="w-50 h-10 rounded-5" src={data.image} alt="Product image" />
      <div className="pl-3 truncate max-w-xl md:max-w-xs sm:max-w-xs">
        <div className="text-base font-semibold">{data.productName}</div>
        <div className="font-normal text-gray-500">{data.desc}</div>
      </div>
    </th>
    <td className="px-6 py-4 text-gray-700">
      {`${data.stocks} in stocks`}
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center text-gray-700">
        $ {data.price}
      </div>
    </td>
    <td className="px-6 py-4 text-gray-700">
      {data.totalSales}
    </td>
  </tr>
))}

        

      </tbody>
    </table>
  </div>

  )
}

export default DashBoardTable