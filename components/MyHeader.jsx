import { Navbar, Dropdown, Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function MyHeader() {
  return (
    <div className="shadow-md">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Company Logo"
            height={23}
            width={23}
          />
          <span className="self-center text-xl font-semibold text-transparent whitespace-nowrap dark:text-white bg-clip-text bg-gradient-to-r from-green-600 to-red-600">
            Dreadlock Nation
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link className="" href="/">
            Home
          </Link>
          <Link href="/team">Team</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
