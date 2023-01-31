import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import urlFor from '../lib/urlFor';

type Props = {
  posts: Post[];
};

function Blogs({ posts }: Props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 gap-y-16 pb-24'>
      {/* Posts */}
      {posts.map((post) => (
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
          <div className='group cursor-pointer'>
            {' '}
            {/* post image and date */}
            <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duraiton-200 ease-out'>
              {' '}
              {/* post image */}
              <Image
                className='object-cover object-left lg:object-center'
                src={urlFor(post.mainImage).url()}
                fill
                alt={post.author.name}
              />
              {/* Post Info Overlay */}
              <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between'>
                <div>
                  {/* post title FONT BOLD*/}
                  <p className='font-bold'>{post.title}</p>{' '}
                  <p>
                    {new Date(post._createdAt).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>

                <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                  {post.categories.map((category) => (
                    <div className='bg-[#fcc40a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <section className='mt-5 flex-1'>
              {' '}
              {/* post title and description */}
              <p className='underline text-lg font-bold'>{post.title}</p>
              <p className='line-clamp-2 text-gray-500'>{post.description}</p>
            </section>
            <p className='font-bold flex items-center group-hover:underline'>
              Read Post
              <ArrowUpRightIcon className='ml-2 h-2 w-2' />
            </p>
          </div>
        </ClientSideRoute>
      ))}
    </div>
  );
}

export default Blogs;
