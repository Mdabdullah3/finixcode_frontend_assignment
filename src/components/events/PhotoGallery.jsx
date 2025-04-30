import Image from "next/image";

export const PhotoGallery = ({
  mainImage,
  secondaryImage,
  additionalPhotos,
}) => {
  return (
    <section className="px-10">
      <div className="w-full md:max-w-full">
        <div className="grid grid-cols-13 gap-3">
          <div
            className="rounded-3xl min-w-60 col-span-9 md:max-w-full relative"
          >
            <Image
              src={mainImage}
              width={1100}
              height={500}
              className="h-[26rem] rounded-3xl"
              alt="Main event image"
            />
          </div>

          {/* Secondary Images Column */}
          <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-60 md:max-w-full col-span-4">
            <div className="flex flex-col gap-3 h-[417px]">
              <div className="flex-1 relative" style={{ aspectRatio: "2.6" }}>
                <div className="overflow-hidden w-full h-full ">
                  <Image
                    src={secondaryImage}
                    fill
                    className="object-cover rounded-3xl"
                    alt="Secondary event image"
                  />
                </div>
              </div>
              {/* Overlay Image - takes the other half */}
              <div className="flex-1 relative">
                <div className="overflow-hidden w-full h-full text-3xl font-medium leading-none text-white rounded-3xl bg-neutral-900">
                  <div className="relative w-full h-full">
                    <Image
                      src={mainImage}
                      fill
                      className="object-cover"
                      alt="Additional photos"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <span className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      +2 photos
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
