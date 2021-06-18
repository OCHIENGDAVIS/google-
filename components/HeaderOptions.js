import HeaderOption from '../components/HeaderOption';
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographicIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from '@heroicons/react/solid';

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-500 justify-evenly text-sm mt-6  lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* left section */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      <div className="flex space-x-4">
        {/* right section */}
        <p>Settings</p>
        <p>Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
