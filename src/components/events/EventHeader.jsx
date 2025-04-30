import { FaHeart } from "react-icons/fa";
import { RiShare2Line } from "react-icons/ri";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
export const EventHeader = ({ title, venue, datetime }) => (
  <header className="flex md:px-10 px-5 flex-wrap gap-10 justify-between items-start pb-14 w-full">
    <div className="min-w-60">
      <h1 className="text-3xl font-black leading-none text-neutral-900 md:text-5xl">
        {title}
      </h1>
      <div className="mt-4 max-w-full text-2xl leading-none text-neutral-600 w-[344px]">
        <p>{venue}</p>
        <p className="mt-4">{datetime}</p>
      </div>
    </div>

    <div className="flex gap-4 items-center">
      <button className=" flex items-center justify-center bg-neutral-100 h-[42px] w-[42px] rounded-full mx-auto">
        <RiShare2Line size={24} />
      </button>
      <button className="flex items-center justify-center p-2 bg-neutral-100 h-[42px] w-[42px] rounded-full mx-auto">
        <FaHeart size={24} />
      </button>
      <IoEllipsisVerticalOutline size={24} />
    </div>
  </header>
);
