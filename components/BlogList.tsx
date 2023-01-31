import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import Blogs from './Blogs';
import ClientSideRoute from './ClientSideRoute';
type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className='border-[#fcc40a] mb-10' />
      <div>
        <Blogs posts={posts} />
      </div>
    </div>
  );
}

export default BlogList;
