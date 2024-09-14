import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-yellow-100 rounded-xl p-8 md:p-0 dark:bg-brown-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/music.jpg"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-bold">
              &ldquo;Novels and books reading is my favourite hobby&apos;listening aesthatic songs 
              and also sing in alone &rsquo;poetry reading and listening.
              and sleeping&rdquo;
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;