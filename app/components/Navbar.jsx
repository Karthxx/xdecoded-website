import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/image/Logo_XDecoded.svg";

const Navbar = () => {
  return (
    <nav className=" max-w-6xl mx-auto flex flex-row justify-around py-4 items-center">
      <div className="">
        <Link href={"/"}>
          <Image width={40} height={40} src={Logo} alt="Logo"></Image>
        </Link>
      </div>
      <div className="font-extralight">
        <Link className="mx-3" href={"/"}>
          Work
        </Link>
        <Link className="mx-3" href={"/"}>
          Sevices
        </Link>
      </div>
      <div>
        <button className="font-bold">{`Get Started`}</button>
      </div>
    </nav>
  );
};

export default Navbar;
