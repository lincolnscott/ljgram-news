import Image from 'next/image';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            className='rounded-md'
            src='/images/Logo.png'
            width={50}
            height={50}
            alt='logo'
          />
        </Link>
        <h1>LJgram News</h1>
      </div>

      <div>
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
