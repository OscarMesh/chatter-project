import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface MobileNavProps {
  isMobile?: boolean;
  setIsMobile?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<MobileNavProps> = ({ setIsMobile, isMobile }) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/signin");
  };
  return (
    <div
      className="
      h-screen w-screen bg-white fixed top-0 left-0 z-50
        md:hidden transition-all ease-in-out
        delay-150

      "
    >
      <div className="flex flex-end justify-end gap-4 items-center p-4">
        <div
          className="tranition duration-500 delay-150 cursor-pointer ease-in-out hover:text-primary"
          onClick={() => setIsMobile && setIsMobile(!isMobile)}
        >
          <AiOutlineClose size={30} />
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-10 items-center">
        <ul className="flex flex-col space-y-6">
          <li className="hover:text-primary">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-primary">
            <Link href={"#about"}>About Us</Link>
          </li>
          <li className="hover:text-primary">
            <Link href={"#contact"}>Contacts</Link>
          </li>
          <li className="hover:text-pri">
            <Link href={"#blog"}>Blogs</Link>
          </li>
        </ul>

        <div className="flex flex-col space-y-6 items-center">
          <Button outline onClick={handleNavigate}>
            Log in
          </Button>
          <Button onClick={handleNavigate}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
