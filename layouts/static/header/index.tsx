import Button from "@/components/Button";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/signin");
  };
  return (
    <div className="w-[95%] md:w-[80%] h-[70px] md:h-[100px] mx-auto flex justify-between items-center">
      {/* logo */}

      <Logo />

      {/* nav */}

      <div
        className="
            hidden md:flex flex-row gap-4 items-center
            "
      >
        <div></div>
        <ul className="flex space-x-4 items-center">
          <li className="hover:text-primary">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-primary">
            <Link href={"#about"}>About Us</Link>
          </li>
          <li className="hover:text-primary">
            <Link href={"#contact"}>Contacts</Link>
          </li>
          <li className="hover:text-primary">
            <Link href={"#blog"}>Blogs</Link>
          </li>
        </ul>
      </div>

      {/* button */}
      <div
        className="
            hidden md:flex md:flex-row md:space-x-4 md:items-center
            justify-end
            "
      >
        <Button outline onClick={handleNavigate}>
          Log in
        </Button>
        <Button onClick={handleNavigate}>Sign Up</Button>
      </div>

      {/*  */}
      <div
        className="
                  md:hidden
                  tranition-all duration-500 ease-in-out
                  delay-150
                  cursor-pointer
                  hover:text-primary
                  "
      >
        <RxHamburgerMenu size={30} onClick={() => setIsMobile(!isMobile)} />
      </div>

      {isMobile && <MobileNav isMobile={isMobile} setIsMobile={setIsMobile} />}
    </div>
  );
};

export default Header;
