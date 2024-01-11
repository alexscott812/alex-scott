import { ReactNode } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
import useColorMode from '../hooks/useColorMode';

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
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];

const Header = () => {
  const { pathname } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleColorMode: React.MouseEventHandler<HTMLButtonElement> = () => {
    toggleColorMode();
  };

  return (
    <div className="fixed z-10 w-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="px-4 container mx-auto flex h-14 max-w-2xl items-center justify-between">
        <Link href="/" >
          <a className="text-2xl font-semibold">{'<AS />'}</a>
        </Link>
        <div>
          {/* {navLinks.map(link => (
            <Link href={link.path} key={link.name}>
              <a className={`font-semibold px-2 ${pathname === link.path && 'underline underline-offset-4 decoration-violet-600 dark:decoration-violet-500 decoration-4'}`}>
                {link.name}
              </a>
            </Link>
          ))} */}
          {navLinks.map(link => (
            <Link href={link.path} key={link.name}>
              <a className={`ml-1 px-2 py-2 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 ${pathname === link.path && 'text-violet-600 dark:text-violet-500'}`}>
                {link.name}
              </a>
            </Link>
          ))}
          <button className='ml-1 px-2 py-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900' onClick={handleToggleColorMode}>
            {colorMode === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;