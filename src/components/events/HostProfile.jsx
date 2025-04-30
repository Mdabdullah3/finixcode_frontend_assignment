import Image from "next/image";

export const HostProfile = ({ host }) => (
  <section className="md:py-16 py-8 md:w-8/12 w-11/12">
    <h2 className="text-3xl font-bold text-neutral-900">Hosted by</h2>
    <div className="flex flex-wrap gap-10 items-center px-6 py-7 mt-8 bg-slate-600 rounded-2xl justify-between">
      <div className="flex gap-6 items-center">
        <Image
          src={host.image}
          width={96}
          height={96}
          className="rounded-full"
          alt={host.name}
        />
        <div className="text-white">
          <h3 className="text-2xl font-bold">{host.name}</h3>
          <p className="text-base">{host.activitiesHosted} activities hosted</p>
          <p className="text-base">{host.rating} host rating</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <button className="px-7 py-2.5 bg-orange-100 rounded-full">
          Message
        </button>
        <button className="px-4 py-2.5 text-orange-100 rounded-full border-orange-100 border">
          View profile
        </button>
      </div>
    </div>
  </section>
);