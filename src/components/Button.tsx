import React from "react";

export default function Button({
  children = "Press me",
}: {
  children?: string;
}) {
  return (
    <button className="px-5 py-2 bg-green-400 rounded-full text-white shadow-xl cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-blue-500">
      {children}
    </button>
  );
}
