import React from "react";

export default function NavLink({ href, children, onClick }: any) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        font-sora text-[15px] text-black hover:text-brand-yellow
        transition cursor-pointer
      "
    >
      {children}
    </a>
  );
}
