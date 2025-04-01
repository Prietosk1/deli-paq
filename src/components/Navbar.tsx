import React from "react";
import NavbarItem from "@/components/NavbarItem";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <div className="flex bg-green-200 h-18 justify-around items-center shadow-xl">
      <p className="text-lime-900 text-2xl font-bold tracking-widest">
        FLASHPAQ
      </p>
      <div className="flex flex-row gap-10">
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Product</NavbarItem>
        <NavbarItem>About us</NavbarItem>
      </div>
      <Button>Contact</Button>
    </div>
  );
}
