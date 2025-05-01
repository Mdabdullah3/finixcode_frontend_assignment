"use client";
import { FaTrophy } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { FaCircleUser } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { DatePicker } from "../ui/DatePicker";
import { useState } from "react";
export default function Navbar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Content */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={25}
              height={34}
              className="object-contain"
            />
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <FiX size={24} className="text-gray-600" />
            </button>
          </div>
          <div className="space-y-4 mb-6">
            <DatePicker
              placeholder="Pick a date"
              value={selectedDate}
              onChange={setSelectedDate}
              className="w-full"
            />
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                className="pl-4 pr-10 bg-white rounded-[99px] text-md text-neutral-500 w-full shadow-[0px_3px_8px_rgba(0,0,0,0.1)]"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-9 h-9 bg-neutral-200 rounded-full cursor-pointer">
                <LuSearch className="text-gray-600 w-[21px] h-[21px]" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <button className="flex gap-3 items-center w-full py-3 px-4 bg-[#F4F5EF] rounded-[99px] text-secondary">
              <FaTrophy className="w-[13px] h-[13px]" />
              <span className="text-base font-medium">Leaderboard</span>
            </button>
            <button className="w-full py-3 px-6 text-base font-medium leading-none text-center border text-secondary border-secondary rounded-full">
              Login / Sign up
            </button>
            <button className="flex gap-3 items-center w-full py-3 px-4">
              <FaCircleUser size={20} />
              <span className="text-base font-medium">Profile</span>
            </button>
          </div>
        </div>
      </div>
      {/* Main Navbar - Desktop version remains unchanged */}
      <nav className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-10 py-4 bg-white max-md:px-5 max-md:py-3">
        <div className="flex gap-px items-center self-stretch my-auto">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={25}
            height={34}
            className="object-contain self-stretch my-auto aspect-[0.74]"
          />
        </div>
        {/* Search Controls - hidden on mobile */}
        <div className="flex flex-wrap gap-2 self-stretch my-auto min-w-60 max-md:hidden">
          <div className="w-[260px] min-h-[52px]">
            <DatePicker
              placeholder="Pick a date"
              value={selectedDate}
              onChange={setSelectedDate}
              className="w-full"
            />
          </div>
          <div className="relative flex items-center w-[260px] min-h-[52px]">
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
        {/* User Controls - hidden on mobile */}
        <div className="flex gap-2 items-center self-stretch h-full min-w-60 max-md:hidden">
          <div>
            <button className="flex gap-1.5 items-center self-stretch py-3.5 pr-4 pl-3 my-auto bg-[#F4F5EF] rounded-[99px] text-secondary">
              <div className="flex gap-2.5 justify-center items-center self-stretch my-auto w-5 min-h-5">
                <FaTrophy className="w-[13px] h-[13px]" />
              </div>
              <span className="self-stretch my-auto text-base font-medium">
                Leaderboard
              </span>
            </button>
          </div>
          <div>
            <button className="overflow-hidden gap-2.5 self-stretch px-6 py-3.5 my-auto text-base font-medium leading-none text-center border text-secondary border-secondary rounded-full">
              Login / Sign up
            </button>
          </div>
          <div className="flex px-2 py-[5px] border-gray-300 border self-stretch my-auto rounded-full">
            <button>
              <FiMenu size="20" />
            </button>
            <button className="flex overflow-hidden gap-2.5 items-center self-stretch py-1.5 pr-2 pl-2.5 my-auto bg-white rounded-[99px]">
              <FaCircleUser size="24" />
            </button>
          </div>
        </div>
        {/* Mobile Menu Button - visible only on mobile */}
        <div className="hidden max-md:flex items-center gap-3">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FiMenu size={20} />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <FaCircleUser size={20} />
          </button>
        </div>
      </nav>
    </>
  );
}