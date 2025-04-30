"use client";
import { FaTrophy } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { FaCircleUser } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { DatePicker } from "../ui/DatePicker";
import { useState } from "react";
export default function Navbar() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <nav className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-10 py-4 bg-white max-md:px-5">
      <div className="flex gap-px items-center self-stretch my-auto">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={25}
          height={34}
          className="object-contain self-stretch my-auto aspect-[0.74]"
        />
      </div>

      {/* SearchControls Placeholder */}
      <div className="flex flex-wrap gap-2 self-stretch my-auto min-w-60  max-md:max-w-full">
        {/* Date Input */}
        <div className="w-[260px] min-h-[52px]">
          <DatePicker
            placeholder="Pick a date"
            value={selectedDate}
            onChange={setSelectedDate}
            className="w-full"
          />
        </div>

        {/* Search Input */}
        <div className="relative flex items-center w-[260px] min-h-[52px] ">
          <Input
            type="text"
            placeholder="Search"
            className="pl-4 border-none pr-10 bg-white rounded-[99px] text-md text-neutral-500 w-full shadow-[0px_3px_8px_rgba(0,0,0,0.1)]"
          />
          <div className="absolute right-2 flex items-center justify-center w-9 h-9 bg-neutral-200 rounded-full cursor-pointer">
            <LuSearch className="text-gray-600 w-[21px] h-[21px]" />
          </div>
        </div>
      </div>

      {/* UserControls Placeholder */}
      <div className="flex gap-2 items-center self-stretch h-full min-w-60">
        <div>
          <button className="flex gap-1.5 items-center self-stretch py-3.5 pr-4 pl-3 my-auto bg-[#F4F5EF] rounded-[99px] text-secondary">
            <div className="flex gap-2.5 justify-center items-center self-stretch my-auto w-5 min-h-5">
              <FaTrophy className="w-[13px] h-[13px]" />
            </div>
            <span className="self-stretch my-auto text-base font-medium ">
              Leaderboard
            </span>
          </button>
        </div>
        <div>
          <button className="overflow-hidden gap-2.5 self-stretch px-6 py-3.5 my-auto text-base font-medium leading-none text-center border text-secondary max-md:px-5 border-secondary rounded-full">
            Login / Sign up
          </button>
        </div>
        <div className="flex  px-2 py-[5px] border-gray-300 border  self-stretch my-auto rounded-full">
          <button>
            <FiMenu size="20" />
          </button>
          <button className="flex overflow-hidden gap-2.5 items-center self-stretch py-1.5 pr-2 pl-2.5 my-auto bg-white rounded-[99px]">
            <FaCircleUser size="24" />
          </button>
        </div>
      </div>
    </nav>
  );
}
