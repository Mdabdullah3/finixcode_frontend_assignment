import { Map } from "lucide-react";
import { DifficultyIndicator } from "./DifficultyIndicator";
import { TagList } from "./TagList";

export const EventDetails = ({ details }) => (
  <section className="md:py-16 py-8 w-full border-b border-[#E5E5E5]">
    <div className="flex md:pb-16 pb-8 flex-wrap justify-between gap-2 items-center">
      <TagList tags={details.tags} />
      <DifficultyIndicator difficulty={details.difficulty} />
    </div>

    <hr className="border-[#E5E5E5]" />
    <div className="md:py-16 py-8 border-b border-[#E5E5E5]">
      <h2 className="text-3xl font-bold text-neutral-900">About this event</h2>
      <p className="mt-10 text-md leading-6 text-secondary-foreground w-10/12">
        {details.description}
      </p>
      <h1 className="mt-4 text-lg underline text-blue-400 cursor-pointer">
        Read more
      </h1>
    </div>

    <div className="md:pt-16 pt-8">
      <h2 className="text-3xl font-bold text-neutral-900">Location</h2>
      <div className="flex flex-wrap gap-20 items-start mt-10">
        <div className=" min-w-60">
          <h3 className="text-2xl font-bold text-slate-600">
            {details.location.name}
          </h3>
          <p className="mt-1 text-lg text-secondary-foreground">
            {details.location.address}
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 text-lg font-medium text-slate-600 border border-slate-600 rounded-full">
          Open maps
        </button>
      </div>
    </div>
  </section>
);
