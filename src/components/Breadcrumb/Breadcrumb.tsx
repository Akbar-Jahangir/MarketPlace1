import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BreadcrumbItem } from "./breadcrumbItem.interface";



const Breadcrumb: React.FC = () => {
  const location = useLocation();

  // Generate breadcrumb items from pathname
  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbs: BreadcrumbItem[] = pathnames
    .filter((path) => isNaN(Number(path))) // Filter out numeric IDs
    .map((path, index) => {
      const breadcrumbPath = `/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        name: path.charAt(0).toUpperCase() + path.slice(1),
        path: breadcrumbPath,
      };
    });

  return (
    <nav className="breadcrumb-container py-2">
      <ul className="flex items-center space-x-2">
        {/* Home Link */}
        <li>
          <Link to="/home" className="text-blue hover:underline">
            Home
          </Link>
        </li>

        {/* Generate dynamic breadcrumb items */}
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <li className="text-lightblack">/</li>
            <li className="text-lightblack">
              {breadcrumb.name}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
