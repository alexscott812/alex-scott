import { ReactNode } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import { FiSun, FiMoon } from 'react-icons/fi';

interface NavLink {
  name: string;
  path: string;
}

const navLinks: NavLink[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];

const colorModes: string[] = ['light', 'dark', 'natural'];

const Footer = () => {
  const { pathname } = useRouter();
  // const [colorMode, setColorMode] = useColorMode();

  // const handleToggleColorMode: React.MouseEventHandler<HTMLButtonElement> = () => {
  //   setColorMode(colorModes[(colorModes.indexOf(colorMode) + 1) % colorModes.length])
  // };

  return (
    <div className="p-4 container mx-auto max-w-2xl py-14">
      <div className="border-t-2 border-stone-100 mb-4" />
      <h1 className="text-stone-500 text-sm">&copy; Alex Scott, 2023</h1>
    </div>
  );
};

export default Footer;