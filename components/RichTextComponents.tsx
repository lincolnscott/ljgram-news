import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../lib/urlFor';
import { PortableText } from '@portabletext/react';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className='relative w-full h-96 px-10'>
          <Image
            className='object-contain'
            src={urlFor(value).url()}
            alt='Blog Post Image'
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className='text-text ml-10 py-5 list-disc space-y-5'>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className='text-text mt-lg list-decimal'>{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className='text-text text-5xl py-10 font-bold'>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className='text-text text-4xl py-10 font-bold'>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className='text-text text-3xl py-10 font-bold'>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className='text-text text-2xl py-10 font-bold'>{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className='text-text text-lg py-5'>{children}</p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className='text-text italic border-l-LJred border-l-4 pl-5 py-5 my-5'>
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noopener noreferrer'
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className='underline decoration-LJblue hover:decoration-black'>
          {children}
        </Link>
      );
    },
  },
};
