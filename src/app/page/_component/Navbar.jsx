import Image from "next/image";
import Button from "./Button";
import logo from "./logo.png";
// import { Link } from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* <!-- Logo --> */}
          <div className="flex items-center">
            <a href="../page" className="text-white text-2xl font-bold">
              <Image src={logo} height={42} width={42} alt="logo"/>
            </a>
          </div>
          {/* <!-- Buttons (Login and Sign Up) --> */}
          <Button />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
