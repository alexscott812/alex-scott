import { useState } from "react";

type ColorMode = 'light' | 'dark';

const useColorMode = () => {
  const [colorMode, setColorMode] = useState<ColorMode>();

  const toggleColorMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark');
      document.documentElement.classList.add('dark');
    } else {
      setColorMode('light');
      document.documentElement.classList.remove('dark');
    }
  }
  return { colorMode, toggleColorMode };
};

export default useColorMode;