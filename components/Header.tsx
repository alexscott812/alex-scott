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
    <div className="fixed z-10 w-full bg-white dark:bg-gray-950 dark:text-gray-50">
      <div className="px-4 container mx-auto flex h-14 max-w-2xl items-center justify-between">
        <Link href="/" >
          <a className="text-2xl font-semibold">{'<AS />'}</a>
        </Link>
        <div>
          {navLinks.map(link => (
            <Link href={link.path}>
              <a className={`font-semibold px-2 ${pathname === link.path && 'underline underline-offset-4 decoration-violet-600 decoration-4'}`}>
                {link.name}
              </a>
            </Link>
          ))}
          <button className='px-2' onClick={handleToggleColorMode}>
            {colorMode === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;