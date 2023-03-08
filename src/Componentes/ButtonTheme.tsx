'use client';
import React, { useEffect, useState } from 'react';
import Moon from './icons/Moon';
import Sun from './icons/Sun';
import useLocalStorageState from 'use-local-storage-state';

function ButtonTheme() {
  // const [theme, setTheme] = useState('');
  // const [query, setQuery] = useState('light');

  const [theme, setTheme] = useLocalStorageState('color-theme', {
    defaultValue: 'light',
  });

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      setTheme('light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="bg-black rounded-md">
      <button onClick={handleClick} className="text-white px-5 py-3">
        {theme === 'light' ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}

export default ButtonTheme;
