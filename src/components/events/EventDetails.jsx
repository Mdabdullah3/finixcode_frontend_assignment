export const EventDetails = ({ details }) => (
  <section className="md:py-16 py-8 w-full border-b border-[#E5E5E5]">
    <div className="flex md:pb-16 pb-8 flex-wrap justify-between gap-2 gap-y-4 items-center">
      <TagList tags={details.tags} />
      <DifficultyIndicator difficulty={details.difficulty} />
    </div>
    <hr className="border-[#E5E5E5]" />
    <div className="md:py-16 py-8 border-b border-[#E5E5E5]">
      <h2 className="text-3xl font-bold text-neutral-900">About this event</h2>
      <p className="md:mt-10 mt-5 text-md leading-6 text-secondary-foreground w-10/12">
        {details.description}
      </p>
      <h1 className="mt-4 text-lg underline text-blue-400 cursor-pointer">
        Read more
      </h1>
    </div>
    <div className="md:pt-16 pt-8">
      <h2 className="text-3xl font-bold text-neutral-900">Location</h2>
      <div className="flex flex-wrap md:gap-20 gap-5 items-start md:mt-10 mt-5">
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

// Reusable components used in EventDetails component 
const TagList = ({ tags }) => (
  <div className="flex flex-wrap gap-4 items-center">
    {tags.map((tag) => (
      <span
        key={tag.label}
        className="px-6 py-5 text-2xl rounded-[48px]"
        style={{ backgroundColor: tag.color }}
      >
        {tag.label}
      </span>
    ))}
  </div>
);

const DifficultyIndicator = ({ difficulty }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex items-end gap-px w-10">
      {[2, 3.5, 5, 6.5].map((height, i) => (
        <div
          key={i}
          className={`w-1.5 ${
            i < difficulty.value ? "bg-emerald-300" : "bg-emerald-100"
          }`}
          style={{ height: `${height * 4}px` }}
        />
      ))}
    </div>
    <span className="text-2xl text-neutral-600">{difficulty.level}</span>
  </div>
);
