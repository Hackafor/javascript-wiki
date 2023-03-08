'use client';
import React, { useEffect, useState } from 'react';
import Moon from './icons/Moon';
import Sun from './icons/Sun';

function ButtonTheme() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const colorScheme = window.localStorage.getItem('color-theme') || 'light';

    if (colorScheme === 'light') {
      document.documentElement.style.backgroundColor = '#475569';
      document.documentElement.style.setProperty('--bg-color', '#1e293b');
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#f6f6f6';
      document.documentElement.style.setProperty('--bg-color', '#f6f6f6');
      localStorage.setItem('color-theme', 'light');
    }

    setTheme(colorScheme);
  }, []);

  const handleClick = () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.style.backgroundColor = '#475569';
        document.documentElement.style.setProperty('--bg-color', '#1e293b');
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        setTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.backgroundColor = '#ffffff';
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        localStorage.setItem('color-theme', 'light');
        setTheme('light');
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.backgroundColor = '#ffffff';
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.style.backgroundColor = '#1e293b';
        document.documentElement.style.setProperty('--bg-color', '#1e293b');
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  };

  return (
    <button className="text-white" onClick={handleClick}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </button>
  );
}

export default ButtonTheme;
