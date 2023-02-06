'use client';
import { SunIcon } from '@heroicons/react/24/outline';
function DarkModeToggle() {
  return (
    <div>
      <button onClick={ToggleDark}>
        <SunIcon className='h-6 w-6' />
      </button>
    </div>
  );
}

function ToggleDark() {
  const html: any = document.querySelector('html');
  if (html?.classList.contains('dark')) {
    localStorage.theme = 'light';
  } else {
    localStorage.theme = 'dark';
  }
}

export default DarkModeToggle;
