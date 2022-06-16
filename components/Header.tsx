import { ReactNode } from "react";
import { Box, useColorMode, Heading, IconButton, Container, Flex, NavLink as NavLinky } from 'theme-ui';
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
  const [colorMode, setColorMode] = useColorMode();

  const handleToggleColorMode: React.MouseEventHandler<HTMLButtonElement> = () => {
    setColorMode(colorModes[(colorModes.indexOf(colorMode) + 1) % colorModes.length])
  };

  return (
    <Box
      as="header"
      sx={{
        py: 3,
        bg: 'background',
        width: '100%',
        position: 'fixed',
        zIndex: 1
      }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Heading>Alex Scott</Heading>
        <Flex sx={{ alignItems: 'center' }}>
          <nav>
            {navLinks.map(navLink => (
              <Link href={navLink.path}>
                <NavLinky
                  sx={{ color: pathname === navLink.path ? 'primary' : 'inherit' }}
                >
                  {navLink.name}
                </NavLinky>
              </Link>
            ))}
          </nav>
          <IconButton
            aria-label="Toggle color mode"
            onClick={handleToggleColorMode}
          >
            {colorMode === 'light' && <FiSun size={16} />}
            {colorMode === 'dark' && <FiMoon size={16} />}
            {colorMode === 'natural' && <FiSun size={16} />}
          </IconButton>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;