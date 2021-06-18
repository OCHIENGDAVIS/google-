import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRef } from 'react';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';

import Avatar from '../components/Avatatr';
import HeaderOptions from '../components/HeaderOptions';

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full px-6  items-center">
        <Link href="/">
          <Image
            src="https://cdn.vox-cdn.com/thumbor/d7qkAUHk-xghciu4NNPd8-5PPOU=/0x18:2500x1685/1200x800/filters:focal(0x18:2500x1685)/cdn.vox-cdn.com/uploads/chorus_image/image/49555689/google-logo.0.0.jpg"
            height={80}
            width={120}
            className="cursor-pointer"
          />
        </Link>
        <form className="flex border border-gray-200 rounded-full shadow-lg flex-grow max-w-3xl items-center px-6 py-2 ml-10 mt-5 mr-5">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-5 sm:mr-3 text-gray-700 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className="h-5 pl-4 border-gray-300 mr-3 hidden sm:inline-flex text-blue-500 bl-2" />
          <SearchIcon className="h-5 text-blue-500 hidden: sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Seach
          </button>
        </form>
        <Avatar
          url="https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg"
          className="ml-auto"
        />
      </div>
      {/* HeaderOption */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
