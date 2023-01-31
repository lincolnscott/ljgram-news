const isDev: boolean = process.env.NODE_ENV === 'development';
let devString: string = '';
if (isDev) {
  devString = 'DEV';
}

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
      <div>
        <h1 className='text-7xl mb-5'>
          LJgram News <span className='font-bold text-[red]'>{devString}</span>
        </h1>
        <h2 className='mt-5 md:mt-0'>
          Welcome to{' '}
          <span className='underline decoration-4 decoration-[#fcc40a]'>
            Every Sensible Person's
          </span>{' '}
          Favorite source for news
        </h2>
      </div>

      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        The latest news, trends, and insights From LJgram News
      </p>
    </div>
  );
}

export default Banner;
