"use client";
import { useRouter,usePathname } from "next/navigation";
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { div } from "framer-motion/client";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  const router = useRouter();
  const pathname = usePathname();

  const [path, setPath] = useState("");
  const checkPath = () => {
  
    setPath(pathname);
    console.log(pathname);

  };
 
  return (
    <Navbar 
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      className=" font-bold bg-white-800 border-b- border-gray- rounded-b-full bg-gray-900" 
    >
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">C'sW </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link color="foreground" href="/" className="text-lg">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/collection"} >
          <Link color="foreground" href="/collection" className="text-lg">
            Collection
          </Link>
        </NavbarItem>
        {/* <NavbarItem isActive={pathname === "/#"}>
          <Link color="foreground" href="/#">
           *****
          </Link>
        </NavbarItem> */}
        <NavbarItem isActive={pathname === "/Blogs"}>
          <Link color="foreground" href="/" className="text-lg">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    
  );
}
