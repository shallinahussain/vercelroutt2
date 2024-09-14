import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-purple-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/fav.jpg"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-bold">
              &ldquo;sleeping for long time,in food shwarma,zinger &apos;in reading suspensfull novels and aesthatic poetry
              .long journey, in weather winter,in dresses plazo and short shirt&rsquo;make sketches,drawing and learning new things
              &rdquo;
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