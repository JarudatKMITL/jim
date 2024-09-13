"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: 'home',
    part: '/',
  },
  {
    name: 'resume',
    part: '/resume',
  },
  {
    name: 'project',
    part: '/project',
  },
  {
    name: 'certificate',
    part: '/certificate',
  },
  {
    name: 'about',
    part: '/about'
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.part}
            key={index}
            className={`${link.part === pathname &&
              "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;