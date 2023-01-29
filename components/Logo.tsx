import Image from 'next/image';
function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className='flex items-center space-x-2'>
      <Image
        className='rounded-full object-cover'
        width={50}
        height={50}
        src='/images/Logo.png'
        alt='LJgram Logo'
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
