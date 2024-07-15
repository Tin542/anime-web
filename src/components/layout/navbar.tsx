"use client";
import { MENU_LIST } from "@/constants/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const checkCurrentPath = () => {
    return MENU_LIST.map((menu, key) => (
      <Link
        key={key}
        className={`text-white p-2 ${
          pathname === menu.path && "bg-button"
        } hover:bg-button`}
        href={menu.path}>
        {menu.title}
      </Link>
    ));
  };
  return (
    <>
      <div className="bg-navbar text-white">
        <div className="relative flex h-16 items-center justify-center font-bold">
          <div className="w-10/12 flex flex-row items-center justify-between">
            <div>
              <Link href="/">
                <h3>ANIME</h3>
              </Link>
            </div>
            <div className="flex flex-row justify-between items-center gap-14">
              {checkCurrentPath()}
            </div>
            <div className="flex flex-row justify-between items-center">
              <button
                type="button"
                className="text-white bg-button hover:opacity-50 p-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
