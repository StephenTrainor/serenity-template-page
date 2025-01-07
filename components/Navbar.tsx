import Link from "next/link";
import Image from "next/image";
import DownArrow from "./DownArrow";

const Navbar = () => {
  return (
    <div className="flex flex-row serenity-dark-blue-bg justify-between">
      <div className="p-4 pl-12 flex flex-row">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/serenity-logo.svg"
            width={128}
            height={200}
            alt="Serenity"
          />
        </Link>
      </div>
      <nav className="my-auto p-4 flex flex-row justify-evenly space-x-8">
        <div className="nav-item">
          <div>
            Products
          </div>
          <DownArrow />
        </div>
        <div className="nav-item">
          <div>
            Solutions
          </div>
          <DownArrow />
        </div>
        <div className="nav-item">
          <div>
            Industries
          </div>
          <DownArrow />
        </div>
        <div className="nav-item">
          <div>
            Resources
          </div>
          <DownArrow />
        </div>
        <div className="nav-item">
          <div>
            About
          </div>
          <DownArrow />
        </div>
      </nav>
      <div className="my-auto flex flex-row p-4 pr-12">
        <div className="button-light rounded-full font-medium">TRY OUR FREE TRIAL</div>
      </div>
    </div>
  );
};

export default Navbar;