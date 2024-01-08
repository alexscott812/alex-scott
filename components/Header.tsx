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

  const handleToggleColorMode: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log('toggling color mode');
    // document.documentElement.classList.add('dark');
    // setColorMode(colorModes[(colorModes.indexOf(colorMode) + 1) % colorModes.length])
  };

  return (
    <div className="fixed z-10 w-full bg-white dark:bg-gray-950 dark:text-gray-50">
      <div className="px-4 container mx-auto flex h-14 max-w-2xl items-center justify-between">
        <Link href="/" >
          <a className="text-2xl font-semibold">{'<AS />'}</a>
        </Link>
        <div>
          <Link href="/projects">
            <a className={`font-semibold px-2 ${pathname === '/projects' && 'underline underline-offset-4 decoration-violet-600 decoration-4'}`}>Projects</a>
          </Link>
          <Link href="/about">
            <a className={`font-semibold px-2 ${pathname === '/about' && 'underline underline-offset-4 decoration-violet-600 decoration-4'}`}>About</a>
          </Link>
          <Link href="/contact">
            <a className={`font-semibold px-2 ${pathname === '/contact' && 'underline underline-offset-4 decoration-violet-600 decoration-4'}`}>Contact</a>
          </Link>
          <button onClick={handleToggleColorMode}>a</button>
        </div>
      </div>
    </div>
  );
};

export default Header;