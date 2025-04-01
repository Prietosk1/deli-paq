import React from "react";

export default function NavbarItem({ children }: { children: string }) {
  return (
    <button className="text-lime-950 text-md cursor-pointer transform transition duration-300 hover:scale-110">
      {children}
    </button>
  );
}
