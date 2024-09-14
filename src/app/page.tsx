import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/info.jpg"
          alt="Sarah Dayan"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-bold">
              &ldquo;About myself,contact number,addrress,hobbies &apos;
              &rsquo;faviourate things,about my family members
              &rdquo;
            </p>
          </blockquote>
          <figcaption className="font-large">
            <div className="text-blue-900 dark:text-blue-900">
              shallina hussain
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