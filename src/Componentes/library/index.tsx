import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  id: string;
  logo: string;
  page: string;
}

export default function Library(props: Props) {
  return (
    <>
      <Link href={props.page} target="_blank" className='block rounded-md bg-white h-36 shadow-lg'>
        <div className="rounded overflow-hidden  flex justify-center">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-center text-black">{props.title}</div>
            <div className="">
              <span className="bg-gray-200 rounded-full p-1 place-content-center flex ">
                <img width={50} height={50} src={props.logo ?? ""} className='p-1 rounded-full' />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
