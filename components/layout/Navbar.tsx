import Link from "next/link";
import Image from "next/image";
import CustomButton from "../shared/CustomButton";
import { navbarLinks } from "@/constants";

const Navbar = () => {
  return (
    <header className="w-full z-10 fixed overflow-hidden bg-gray-700 text-white">
      <nav className="max-w-[1440px] mx-auto flex justify-around items-center sm:px-14 py-2 ">
        <ul className="flex flex-wrap flex-column px-2 ">
          {navbarLinks.map((link) => (
            <Link key={link.title} href={link.url}>
              <li className="px-2">{link.title}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
