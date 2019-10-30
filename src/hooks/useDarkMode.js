import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkModeOn', false);

  useEffect(() => {
    const body = document.querySelector('body');

    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }

  }, [darkMode]);
  console.log('darkMode', darkMode)
  return [darkMode, setDarkMode];
}

export default useDarkMode;
