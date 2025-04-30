"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FaLocationDot,
  FaUserGroup,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { eventsData } from "@/lib/constant";

const SimilarEvents = () => {
  const events = eventsData;
  return (
    <section className="p-10 bg-white md:px-5">
      <div className="max-w-7xl mx-auto">
        <EventSectionHeader />
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          className="mt-8"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <EventCard {...event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const EventSectionHeader = () => (
  <header className="flex justify-between items-center">
    <h2 className="text-2xl font-bold text-gray-800">
      Other events you may like
    </h2>
    <div className="flex gap-4">
      <button className="prev-button flex items-center justify-center w-12 h-12 bg-stone-100 rounded-full cursor-pointer">
        <FaArrowLeft className="text-gray-600" />
      </button>
      <button className="next-button flex items-center justify-center w-12 h-12 bg-stone-100 rounded-full cursor-pointer">
        <FaArrowRight className="text-gray-600" />
      </button>
    </div>
  </header>
);

const EventCard = ({
  image,
  title,
  date,
  time,
  location,
  attendance,
  spotsLeft,
  price,
}) => (
  <article className="rounded-[30px] overflow-hidden border border-gray-200">
    <div className="relative aspect-[3.82] w-full">
      <Image src={image} fill className="object-cover" alt={title} />
    </div>

    <div className="p-4 bg-white">
      <div className="flex justify-between items-start">
        <div className="flex gap-2">
          <span className="px-3 py-1 text-xs bg-green-100 rounded-full">
            Football
          </span>
          <span className="px-3 py-1 text-xs bg-violet-100 rounded-full">
            Below 25y
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex gap-px h-3 items-end">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1 bg-emerald-300" 
                style={{ height: `${i * 3}px` }}
              />
            ))}
          </div>
          <span className="text-xs">Advanced</span>
        </div>
      </div>
      <h3 className="mt-2 text-xl font-medium text-secondary line-clamp-1">
        {title}
      </h3>
      <div className="mt-2 space-y-1 text-sm">
        <div className="flex gap-2 text-neutral-900">
          <span>{date}</span>
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FaLocationDot className="text-[#FF0000] text-sm" />
          <address className="not-italic">{location}</address>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-end">
        <div className="text-sm text-neutral-900">
          <FaUserGroup className="inline mr-1" />
          {attendance}
        </div>
        <div className="text-right">
          <div className="text-sm text-rose-800">{spotsLeft} spots left</div>
          <div className="flex items-center gap-1 text-2xl">
            <span className="text-sm px-1 bg-black text-white rounded-full">
              ৳
            </span>
            <span>
              {price}
              <span className="text-lg text-secondary-foreground">/person</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </article>
);

export default SimilarEvents;
