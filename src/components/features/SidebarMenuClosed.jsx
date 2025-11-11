import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { NavLink } from "react-router-dom";
import { navLinks } from "../../assets/data/navLinks";
// import { useGlobalContext } from "../../contextAPI";

const SidebarMenuClosed = () => {
  // const { navOpen } = useGlobalContext();

  return (
    <ul className="ml-auto flex flex-col gap-y-4 h-full content-center items-center w-full">
      {navLinks.map((link, index) => {
        const { name, icon } = link;
        return (
          <li
            key={index}
            className="p-2 tooltip tooltip-right hover:cursor-pointer"
            data-tip={name}
          >
            <FontAwesomeIcon className="fa-fw w-4 h-4" icon={icon} />
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarMenuClosed;
