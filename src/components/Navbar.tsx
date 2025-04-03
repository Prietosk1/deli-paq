import React from "react";
import NavbarItem from "@/components/NavbarItem";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <div className="flex h-18 items-center justify-around bg-green-200 shadow-xl">
      <p className="text-2xl font-bold tracking-widest text-lime-900">
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
