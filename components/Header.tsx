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

const Header = () => {
  const { pathname } = useRouter();
  // const [colorMode, setColorMode] = useColorMode();

  // const handleToggleColorMode: React.MouseEventHandler<HTMLButtonElement> = () => {
  //   setColorMode(colorModes[(colorModes.indexOf(colorMode) + 1) % colorModes.length])
  // };

  return (
    <div className="fixed z-10 w-full bg-white">
      <div className="px-4 container mx-auto flex h-14 max-w-2xl items-center justify-between">
        <Link href="/" >
          <a className="text-2xl font-semibold">Alex Scott</a>
        </Link>
        <div>
          <Link href="/projects">
            <a className={`font-semibold px-2 ${pathname === '/projects' && 'underline underline-offset-4 decoration-violet-600'}`}>Projects</a>
          </Link>
          <Link href="/contact">
            <a className={`font-semibold px-2 ${pathname === '/contact' && 'underline underline-offset-4 decoration-violet-600'}`}>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;