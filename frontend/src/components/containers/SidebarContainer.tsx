import webIcon from "../../assets/icons/web_icon.png";
import { LayoutDashboard, FileUser, LogOut } from "lucide-react";

export const SidebarContainer = () => {
  const sidebarNavigations = [
    {
      navName: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      navName: "Application",
      icon: FileUser,
    },
    {
      navName: "Logout",
      icon: LogOut,
    },
  ];
  return (
    <aside className="bg-white shadow-2xl hidden lg:block">
      <div className="flex justify-center rounded-full bg-white my-5">
        <img
          src={webIcon}
          alt="web_logo"
          className="w-[clamp(22px,10vw,60px)]"
        />
      </div>
      <nav className="flex flex-col gap-8 px-8">
        {sidebarNavigations.map((navs, index) => (
          <ul
            key={index}
            className="group flex p-3 items-center gap-2 text-slate-700 hover:bg-auth-bg hover:text-white rounded-[13px] transition-all ease-in-out duration-300 cursor-pointer"
          >
            <navs.icon className="text-slate-700 h-[clamp(10px,2vw,25px)] w-[clamp(10px,2vw,25px)] group-hover:text-white" />

            <a
              href="#"
              className="text-[clamp(10px,2vw,15px)] text-slate-700 group-hover:text-white"
            >
              {navs.navName}
            </a>
          </ul>
        ))}
      </nav>
    </aside>
  );
};
