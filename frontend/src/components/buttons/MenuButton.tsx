import { Menu, X } from "lucide-react";
import { useState } from "react";
import webLogo from "../../assets/web_logo.png";

const menuNavigation = ["Dashboard", "Application", "Logout"];

export const MenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    console.log(!isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <aside className="lg:hidden">
      <div className="flex justify-between items-center mt-5 mx-5 right-0">
        <img src={webLogo} alt="web_logo" className="w-48 lg:hidden" />
        <Menu onClick={toggleMenu} className="text-primary" />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu} />
      )}

      <nav
        className={`fixed top-0 right-0 flex flex-col h-screen w-65 bg-primary text-white pt-5 pr-5 transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end">
          <X onClick={toggleMenu} />
        </div>

        <div className="ml-5">
          {menuNavigation.map((navs, index) => (
            <ul key={index} className="my-5">
              <a href="#">{navs}</a>
            </ul>
          ))}
        </div>
      </nav>
    </aside>
  );
};
