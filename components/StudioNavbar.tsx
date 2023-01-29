import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

function StudioNavbar(props: any) {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href='/' className='text-[#FCC40A] flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-[#FCC40A] mr-2' />
          LJgram News
        </Link>
        <div className='hidden md:flex p-5 rounded-lg justify-center border-2 border-[#FCC40A]'>
          <h1 className='font-bold text-white'>BUTTON</h1>
          <Link
            href='https://www.youtube.com'
            className='text-[#FCC40A] font-bold ml-2'>
            www.youtube.com
          </Link>
        </div>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
