import { Footer } from "flowbite-react";

export default function MyFooter() {
  return (
    <div className="fixed bottom-0 w-full">
      <Footer container={true}>
        <Footer.Copyright href="#" by="Company™" year={2023} />
        <Footer.LinkGroup className="justify-between">
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="/contact">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
}
