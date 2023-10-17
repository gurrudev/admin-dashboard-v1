import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";


// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdHelp,
  MdOutlineAssistant
} from "react-icons/md";
import Products from "views/admin/products";
import Customers from "views/admin/customers";
import Income from "views/admin/income";
import Promote from "views/admin/promote";
import Help from "views/admin/help";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Products",
    layout: "/admin",
    path: "products",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Products />,
    secondary: true,
  },
  {
    name: "Customers",
    layout: "/admin",
    icon: <MdPerson className="h-6 w-6" />,
    path: "customers",
    component: <Customers/>,
  },
  {
    name: "Income",
    layout: "/admin",
    path: "income",
    icon: <MdBarChart className="h-6 w-6" />,
    component: <Income/>,
  },
  {
    name: "Promote",
    layout: "/admin",
    path: "promote",
    icon: <MdOutlineAssistant className="h-6 w-6" />,
    component: <Promote/>,
  },
  {
    name: "Help",
    layout: "/admin",
    path: "help",
    icon: <MdHelp className="h-6 w-6" />,
    component: <Help/>,
  },
  
];
export default routes;
