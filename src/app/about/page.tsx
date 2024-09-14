import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-green-100 rounded-xl p-8 md:p-0 dark:bg-black-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/shalina.jpg"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-bold">
              &ldquo;My name is shallina hussain,im 22 years old,i am from pakistan,my mother language is punjabi &apos;my cast is mahar minhas
              i live in rahim yar khan &rsquo;i have two brothers, i read in khwaja freed college
              and want to do P.H.D&rdquo;
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