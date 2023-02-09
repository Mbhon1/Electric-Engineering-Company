import { Navbar, Dropdown, Button } from "flowbite-react";
import Image from "next/image";

export default function MyHeader() {
  return (
    <div className="shadow-md">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            height={23}
            width={23}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Company
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/team">Team</Navbar.Link>
          <Navbar.Link href="/projects">Projects</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
