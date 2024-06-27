import Link from "next/link";
import React from "react";

const HeaderLink = ({ href, text }) => {
  return (
    <li className="p-2">
      <Link
        href={href}
        className="font-normal hover:underline"
      >
        {text}
      </Link>
    </li>
  );
};

export default HeaderLink;
