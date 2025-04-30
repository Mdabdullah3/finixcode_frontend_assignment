"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Controller } from "swiper/modules";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import "swiper/css";
import { images } from "@/lib/constant";
export const PhotoGallery = () => {
  const mainSwiperRef = useRef(null);
  const secondarySwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const getNextImageIndex = (currentIndex) => {
    return (currentIndex + 1) % images.length;
  };

  useEffect(() => {
    if (mainSwiperRef.current && secondarySwiperRef.current) {
      const mainSwiper = mainSwiperRef.current.swiper;
      const secondarySwiper = secondarySwiperRef.current.swiper;
      mainSwiper.on("slideChange", () => {
        const nextIndex = getNextImageIndex(mainSwiper.realIndex);
        secondarySwiper.slideTo(nextIndex);
        setActiveIndex(mainSwiper.realIndex);
      });
    }
  }, []);

  return (
    <section className="md:px-10 px-5">
      <div className="w-full md:max-w-full">
        <div className="md:grid grid-cols-13 gap-3">
          {/* Main Gallery Slider */}
          <div
            className="rounded-3xl min-w-60 col-span-9 md:max-w-full relative"
            style={{ aspectRatio: "2.78" }}
          >
            <Swiper
              ref={mainSwiperRef}
              modules={[Autoplay, Thumbs, Controller]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="md:h-[26rem] h-[14rem] rounded-3xl"
            >
              {images.map((image, index) => (
                <SwiperSlide key={`main-${index}`}>
                  <Image
                    src={image}
                    fill
                    className="object-cover"
                    alt={`Main event image ${index + 1}`}
                    priority={index === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Secondary Images Column */}
          <div className="md:flex hidden flex-col flex-1 shrink justify-center basis-0 min-w-60 md:max-w-full col-span-4">
            <div className="flex flex-col gap-3 h-[417px]">
              {/* Secondary Image (shows next image) */}
              <div className="flex-1 relative" style={{ aspectRatio: "2.6" }}>
                <Image
                  src={images[getNextImageIndex(activeIndex)]}
                  fill
                  className="object-cover rounded-3xl"
                  alt="Next event image"
                />
              </div>

              {/* Additional Photos Indicator */}
              <div className="flex-1 relative">
                <div className="overflow-hidden w-full h-full text-3xl font-medium leading-none text-white rounded-3xl bg-neutral-900">
                  <div className="relative w-full h-full">
                    <Image
                      src={
                        images[
                          getNextImageIndex(getNextImageIndex(activeIndex))
                        ]
                      }
                      fill
                      className="object-cover"
                      alt="Additional photos"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <span className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      +{images.length - 2} photos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
